const { Book, User } = require('../models');
import {signToken} from '../utils/auth';  

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user) {
                const newUser = await User.findOne({_id : context.user._id})
                return newUser;
            }
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user)
            return { user, token };
        },
        saveBook: async (parent, args, context) => {
            const book = await User.findOneAndUpdate({_id: context.user._id}, {$push: {savedBooks: args}});
            return book;
        },
        removeBook: async (parent, args, context) => {
            const bookCut = await Book.remove({_id: context.bookId}, true)
            return;
        }
    },
};

module.exports = resolvers;