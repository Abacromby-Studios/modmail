const mongoose = require('mongoose');

const configSchema = new mongoose.Schema({
  guildId: {
    type: String,
    required: true,
    unique: true
  },
  modmailCategoryId: {
    type: String,
    required: true
  },
  logChannelId: {
    type: String,
    required: true
  },
  staffRoleId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  settings: {
    tickets: {
      maxOpenTickets: {
        type: Number,
        default: 3
      },
      closeConfirmation: {
        type: Boolean,
        default: true
      },
      transcripts: {
        type: Boolean,
        default: true
      },
      logsEnabled: {
        type: Boolean,
        default: true
      },
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseTime: {
        type: Number,
        default: 48
      },
      pingStaff: {
        type: Boolean,
        default: false
      },
      requireTopic: {
        type: Boolean,
        default: false
      },
      nameFormat: {
        type: String,
        default: 'modmail-{username}'
      }
    },
    messages: {
      welcomeMessage: {
        type: String,
        default: 'Thank you for creating a ticket with California State Role-Play Community, The Policy Enforcement Team and/or Support Team will respond as soon as possible. in the meantime, please state a correct email address that you have access to and own, your Timezone, whether you are making a player report, staff report, support request, or general inquiry. For all LEGAL inquiries, please contact the Abacromby9 Studios Legal Team at legal@abacromby9-studios.xyz'
      },
      closeMessage: {
        type: String,
        default: 'This ticket has been closed. If you need further assistance, please create a new ticket.'
      },
      responseMessage: {
        type: String,
        default: 'P.E.T Member reply:'
      }
    },
    appearance: {
      embedColor: {
        type: String,
        default: '#5865F2'
      },
      useTimestamps: {
        type: Boolean,
        default: true
      },
      showUserInfo: {
        type: Boolean,
        default: true
      }
    }
  }
});

module.exports = mongoose.model('Config', configSchema); 