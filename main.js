window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const listElement = document.querySelector("#tasks");
    
//Time setting

 
	 
	form.addEventListener('submit', (e) => {
		e.preventDefault();

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let month = today.toLocaleDateString("default", { month: "long" });
let year = today.getFullYear();
let min = today.getUTCMinutes();
let day = today.toLocaleDateString("en-us", { weekday: "long" });
let hour = today.getHours();
today =
  day +
  "," +
  " " +
  dd +
  " " +
  month +
  " " +
  year +
  "," +
  hour +
  ":" +
  min;


		const task = input.value;
		if(!task){
          alert("please fill in the task");
		  return;
		}

		const taskElement = document.createElement('div');
		taskElement.setAttribute("class" , "task");

		const taskContentElement = document.createElement('div');
		taskContentElement.setAttribute("class" , "content");

		taskElement.appendChild(taskContentElement);
		listElement.appendChild(taskElement);


		const taskInputElement = document.createElement('input');
		taskInputElement.classList.add('text');
		taskInputElement.type = 'text';
		taskInputElement.value = task;
		taskInputElement. setAttribute('readonly', 'readonly');

		taskContentElement.appendChild(taskInputElement);
		const taskActionElement = document.createElement('div');
		taskActionElement.setAttribute("class", "actions");

        const currentTime = document.createElement("div");
		currentTime.setAttribute("class", "time");
		const current_time = document.createElement('h4');
		current_time.innerHTML = today;
          
		currentTime.appendChild(current_time);
		taskContentElement.appendChild(current_time)

		const taskEditElement = document.createElement('button');
		taskEditElement.setAttribute("class", "edit");
		taskEditElement.innerText = 'Edit';

		// const search_actions_el = document.createElement('div')
		// search_actions_el.setAttribute("class", "card_action");
		// const hTag = document.createElement("h4");
		// hTag.setAttribute('class', 'search_button');
		// taskContentElement.appendChild(hTag);
		// pTag = document.createElement('p');
		// pTag.setAttribute('class', 'collection');
		//  taskContentElement.appendChild(pTag)



		const taskDeleteElement = document.createElement('button');
		taskDeleteElement.setAttribute("class", "delete");
		taskDeleteElement.innerText = 'Delete';

		taskActionElement.appendChild(taskEditElement);
		taskActionElement.appendChild(taskDeleteElement);

		taskElement.appendChild(taskActionElement);

		
		input.value = '';

		taskEditElement.addEventListener('click', (e) => {
			if (taskEditElement.innerText.toLowerCase() == "edit") {
				taskEditElement.innerText = "Save";
				taskInputElement.removeAttribute("readonly");
				taskInputElement.focus();
			} else {
				taskEditElement.innerText = "Edit";
				taskInputElement.setAttribute("readonly", "readonly");
			}
		});

		taskDeleteElement.addEventListener('click', (e) => {
			listElement.removeChild(taskElement);
		});

		// search_button.addEventListener("keyUp", (e)=>{
        //   taskContentElement.forEach(function (item, index) {
        //     if (taskContentElement.textContent === item) {
        //       taskContentElement.splice(index, 1);
        //     }
          });
	});



// 	const search_button = document.createElement("div");
//   search_button.setAttribute("class", "search_buttn");
//   search_button.innerText = filter;
//   search_button.type = "text";
//   search_button.value = search;
//   search_button.name = "filter";
//   main.appendChild(search_button);