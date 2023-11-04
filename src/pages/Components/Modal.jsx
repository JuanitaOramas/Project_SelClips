import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Modal.css"


const mockComments = [
  {
    "user": "Sam",
    "comment": "Great article, very informative!"
  },
  {
    "user": "Emily",
    "comment": "I love how you emphasize the importance of exercise."
  },
  {
    "user": "Alex",
    "comment": "This content is so helpful for maintaining a healthy lifestyle."
  },
  {
    "user": "Olivia",
    "comment": "I appreciate the tips on stress management. It's crucial for mental health."
  },
  {
    "user": "James",
    "comment": "Thank you for sharing this valuable information!"
  }
]


const Modal = () => {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState(mockComments);

  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleComment = () => {
    setComments([...comments,{user:"james",comment:newComment}])
  };

  return (
    <div>
    <Button className="button-modal" variant="outlined" color="primary" onClick={handleClickOpen}>
      <i className="bi bi-chat-dots-fill messagesIcon"></i>
    </Button>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Comments</DialogTitle>
      <DialogContent>
        <DialogContentText>
          
        {comments.map(comment => {
          return (
              <>
              <div>
              <strong>{comment.user}:</strong> {comment.comment}
              </div>
              </>
          );
        })}
        

        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="comment"
          label="comment"
          type="comment"
          fullWidth
          value={newComment}
          onChange={handleCommentChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleComment} color="primary">
          Comment
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  );
}

export default Modal;
