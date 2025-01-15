// function for handling unauthorized access
const Unauthorized = () => {
  return (
    <div>
      <h1>Not Authorized (401)</h1>
      <p>You do not have permission to view this page.</p>
      <p><a href="/">Go back to the homepage.</a></p>
    </div>
  );
}

export default Unauthorized;