const university=[
  {
    name: 'Harvard',
    rated: false
  },
  {
    name: 'Brown',
    rated: true,
    rating: 3
  },
  {
    name: 'Yale',
    rated: true
  },
  {
    name: 'Columbia',
    rated: false
  },
  {
    name: 'Cornell',
    rated: false
  },
  {
    name: 'University of Pennsylvania',
    rated: true
  },
  {
    name: 'Princeton',
    rated: true
  },
  {
    name: 'Dartmouth',
    rated: true
  }
]

var topRated = [];

function onAdd(uniName){
  university.filter( uni => uni.name === uniName)[0].rated = true;
  init();
}

function onRemove(uniName){
  university.filter( uni => uni.name === uniName)[0].rated = false
  loadRated('#rated');
  loadUnrated('#unrated');
}

function onTopRating(uniName){
  topRated.push(uniName);
  var topRatedString = topRated.join(", ");
  var container = $('#topRated');
  container.empty()
  var div = `<div class="well"><b>Top Rated Universities:</b> ${topRatedString}</p></div>`
  container.append(div);
}

function loadUnrated(containerId){
  var container = $(containerId);
  container.empty();

  var lis = `<ul class="list-group"><li class='list-group-item'><div class="form-group" ><select class="form-control" id="selectId"></select><br><button class="btn btn-primary" id='btnUnrated'>Add Rating for university</button></div></li></ul>`

  container.append(lis);
  var newContainer = $('#selectId');

  var unrated = university.filter( emp => !emp.rated);
  unrated.forEach( unratedEmp => {
    var opt = `<option>${unratedEmp.name}</option>`;
    newContainer.append(opt)
  })

  $('#btnUnrated, container').on('click', function(){
    var li = $(this).parents('li');
    var uniName = $('select', li).val();
    onAdd(uniName);
  })

}

function loadRated(containerId){
  var container = $(containerId);
  container.empty();
  var rated = university.filter( uni => uni.rated)

  if(rated.length !== 0 ){
    rated.forEach(ratedUni => {
      var lis = `<ul class='list-group'><li class='list-group-item'><b>${ratedUni.name}</b><div class='form-group'><select class='form-control' id= "${ratedUni.name}"></select><br><button class="btn btn-danger" id='btnRated'>Remove</button></div></li></ul>`

      container.append(lis);
      var newContainer = $("[id=\"" + ratedUni.name + "\"]");

      for(var i = 1; i < 6; i++){
        if(i === 3){
          var opt=`<option selected>${i}</option>`
        }else{
          var opt=`<option>${i}</option>`
        }
        newContainer.append(opt)
      }

      $("[id=\"" + ratedUni.name + "\"]", container).on('change', function(){
        var li = $(this).parents('li');
        var rating = $('select', li).val();
        var uniName = $(this).attr('id');

        if(rating*1 === 5){
          onTopRating(uniName)
        }
      })

    })
  }

  $('#btnRated, container').on('click', function(){
    var uniName = $(this).siblings('select').attr('id')
    onRemove(uniName);
  })

}


function init(){
  loadRated('#rated');
  loadUnrated('#unrated')
}

init()





