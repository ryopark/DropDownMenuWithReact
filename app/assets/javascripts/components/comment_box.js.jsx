var CommentBox = React.createClass({
  render: function() {
    return (
      <div className='commentBox'>
        <h1>commentBox below</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className='commentList'>
        Hey,CommentList
      </div>
    );
  }
})


var CommentForm = React.createClass({
  render: function() {
    return (
      <div className='commentForm'>
        Hey,CommentForm
      </div>
    );
  }
});
