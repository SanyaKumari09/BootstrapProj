function AddTasks(){

  let task1="Sleep by 10 pm";
  let date1="4/03/26"

  let task2="Study DSA for 2.5 hours";
  let date2="6/03/26";

  return <div class="container">
        <div class="row new-row">
        <div class="col-6">
          {/* Here we need in input tag to enter the todo work */}
          {task1}
        </div>
          <div class="col-4">
             {date1}
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger new-btn">Danger</button>
          </div>
        </div>

         <div class="row new-row">
        <div class="col-6">
          {/* Here we need in input tag to enter the todo work */}
          {task2}
        </div>
          <div class="col-4">
            {date2}
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger new-btn">Danger</button>
          </div>
        </div>

      </div>
}

export default AddTasks;