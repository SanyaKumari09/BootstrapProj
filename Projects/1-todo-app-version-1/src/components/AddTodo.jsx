function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row new-row">
        <div class="col-6">
          {/* Here we need in input tag to enter the todo work */}
          <input type="text" placeholder="Enter todo here"></input>
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success new-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
