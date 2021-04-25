const sectionSchema = Schema({
  title: {
    type: String,
    require: true,
    default: '',
  },
  isDefaultSection: {
    type: Boolean,
    require: true,
    default: false,
  },
  tasks: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
    require: true,
    default: [],
  },
}, { timestamps: true });


const sectionSchema = require('./section');

const listSchema = Schema({
  title: {
    type: String,
    required: true,
    default: '',
  },
  color: {
    type: String,
    required: true,
    default: 'default', // #F3F4F6
  },
  sections: {
    type: [sectionSchema],
    required: true,
    default: [],
  },
}, { timestamps: true });

module.exports = listSchema;

const sectionSchema = Schema({
  title: {
    type: String,
    require: true,
    default: '',
  },
  isDefaultSection: {
    type: Boolean,
    require: true,
    default: false,
  },
  tasks: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
    require: true,
    default: [],
  },
}, { timestamps: true });

module.exports = sectionSchema;


module.exports = sectionSchema;


const { Schema } = require('mongoose');

const mongoose = require('./index');

const taskSchema = Schema({
  title: {
    type: String,
    required: true,
    default: '',
  },
  complete: {
    type: Boolean,
    default: false,
  },
  notes: {
    type: String,
    default: '',
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  // lists: {
  //   type: [{ type: Schema.Types.ObjectId, ref: 'List' }],
  //   require: true,
  // },
  // sections: {
  //   type: [{ type: Schema.Types.ObjectId, ref: 'Section' }],
  //   require: true,
  // },
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

const { Schema } = require('mongoose');

const mongoose = require('./index');

const listSchema = require('./schemas/list');

const userSchema = Schema({
  firstName: {
    type: String,
    required: true,
    default: '',
  },
  lastName: {
    type: String,
    required: true,
    default: '',
  },
  email: {
    type: String,
    required: true,
    default: '',
  },
  password: {
    type: String,
    required: true,
    default: '',
  },
  lists: {
    type: [listSchema],
    required: true,
    default: [],
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;




const user = require('../models/user');

async function getLists(req, res) {
  const { userId } = req.params;
  try {
    // TODO: should throw error if user does not exist, and not hang
    const currUser = await user.findById(userId);
    const populatedLists = await currUser.populate({
      path: 'lists',
      populate: {
        path: 'sections',
        populate: {
          path: 'tasks',
        },
      },
    })
      .execPopulate();
    res.status(200);
    res.send(populatedLists.lists);
  } catch (error) {
    res.status(500);
    res.send({ error, message: 'Did not find lists for user' });
    console.error(error); // eslint-disable-line
  }
}

async function addList(req, res) {
  if (req.body.title === undefined) {
    res.status(400);
    res.send({ message: 'Invalid body' });
  } else {
    const { userId } = req.params;
    try {
      // Create new list, with default section
      const { lists } = await user.findById(userId);
      const updatedUser = await user.findByIdAndUpdate(userId, {
        lists: [{
          title: req.body.title,
          sections: [{ isDefaultSection: true }],
        }, ...lists],
      },
        { new: true });

      res.status(201);
      res.send(updatedUser.lists);
    } catch (error) {
      res.status(400);
      res.send({ error, message: 'Could not add list' });
      console.error(error); // eslint-disable-line
    }
  }
}

async function deleteList(req, res) {
  const { listId } = req.params;
  const { userId } = req.params;
  try {
    const currUser = await user.findById(userId);
    const list = await currUser.lists.id(listId);
    await list.remove();
    const updatedUser = await currUser.save();

    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(400);
    res.send({ error, message: 'Could not delete list' });
  }
}

module.exports = {
  getLists,
  addList,
  deleteList,
};