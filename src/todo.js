//HTML 변수선언

function onInitTodoPage() {
  if (!document.getElementById('toDoList')) return;

  const toDoList = document.getElementById('toDoList');
  const writeBox = document.getElementById('writeBox');
  const writeButton = document.getElementById('writeButton');
  const selDelbutton = document.getElementById('selDelbutton');
  const delAllbutton = document.getElementById('delAllbutton');

  var tdlArray = []; // 할일 오브젝트 배열
  let idNumber = 0;

  //HTML 변수선언 끝!

  //기능 HTHL

  const createLine = targetElement => {
    var li = document.createElement('li');
    li.setAttribute('id', targetElement.doingID);
    li.setAttribute('class', 'list-group-item');
    li.setAttribute('draggable', 'true');
    li.innerHTML = `<input type="checkBox" class="checkBox" />
          <span class="doingText">${targetElement.doing}</span>
          <button class="editButton btn btn-info btn-sm">Edit</button>
          <button class="delButton btn btn-danger btn-sm">\u00D7</button>`;
    toDoList.appendChild(li);
  };

  //기능 HTHL 끝!

  load_tdl_array();

  //엔터키
  writeBox.addEventListener('keydown', enter);
  function enter() {
    var keyInput = window.event.keyCode;
    if (keyInput === 13) {
      add_td();
    }
  }

  //할일추가 이벤트 리스너
  writeButton.addEventListener('click', add_td);

  //라인버튼 이벤트 리스너
  toDoList.addEventListener('click', button_td);

  //할일추가 리스트 업
  function add_td() {
    if (!writeBox.value) {
      alert('You have to write something.');
    } else {
      var Element = {
        doingID: 'doingID_' + idNumber,
        doing: writeBox.value,
        finish: false,
        updateTime: new Date()
      };
      tdlArray.push(Element);
      createLine(Element);

      ++idNumber;
      save_tdl_array();
    }
    writeBox.value = '';
  }

  //라인버튼 스크립트
  function button_td(e) {
    var targetTD = e.target.parentElement;
    var targetTDObject = tdlArray.find(Element => {
      return Element.doingID === targetTD.getAttribute('id');
    });

    var targetClass = e.target.className;
    if (targetClass.includes('delButton')) {
      tdlArray.splice(tdlArray.indexOf(targetTDObject), 1);
      targetTD.parentElement.removeChild(targetTD);
      save_tdl_array();
    } else if (targetClass.includes('editButton')) {
      var editInput = prompt('Write to edit', targetTDObject.doing);
      if (editInput === null) {
      } else if (!editInput) {
        alert('You have to write something.');
      } else if (editInput === targetTDObject.doing) {
        alert('You have to write different.');
      } else {
        targetTDObject.doing = editInput;
        targetTD.querySelector('.doingText').innerText = editInput;
        save_tdl_array();
      }
    }
  }

  //선택항목 삭제
  selDelbutton.addEventListener('click', sel_del);
  function sel_del() {
    var selLi = document.querySelectorAll('.checkBox:checked');
    if (selLi.length === 0) {
      alert('You have to check to delete.');
    } else {
      var selDelCheck = confirm('Delete?');
      if (selDelCheck === true) {
        selLi.forEach(Element => {
          var selLiParent = Element.parentElement;
          var selTDObject = tdlArray.find(Element2 => {
            return Element2.doingID === selLiParent.getAttribute('id');
          });
          tdlArray.splice(tdlArray.indexOf(selTDObject), 1);
          selLiParent.parentElement.removeChild(selLiParent);
        });
        save_tdl_array();
      }
    }
  }

  //할일리스트 저장하기
  function save_tdl_array() {
    window.localStorage.setItem('tdlArray', JSON.stringify(tdlArray));
    window.localStorage.setItem('idNumber', JSON.stringify(idNumber));
  }

  //할일리스트 가져오기
  function load_tdl_array() {
    var lodedTdl = JSON.parse(window.localStorage.getItem('tdlArray'));
    var lodedIDNumber = JSON.parse(window.localStorage.getItem('idNumber'));
    if (typeof lodedIDNumber === 'number') {
      idNumber = lodedIDNumber;
    }
    if (Array.isArray(lodedTdl)) {
      tdlArray = lodedTdl;
      tdlArray.forEach(Element => {
        createLine(Element);
      });
    } else if (!lodedTdl) {
      tdlArray = [];
    }
  }

  //초기화
  delAllbutton.addEventListener('click', clear_tdl_array);
  function clear_tdl_array() {
    window.localStorage.clear('tdlArray');
    window.localStorage.clear('idNumber');
    location.reload();
  }
}
