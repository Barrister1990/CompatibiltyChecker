function lovescore() {
    var yourName = document.getElementById('yourname')
    var NameOfCrush = document.getElementById('crush')
    var greetings = document.getElementById('msg')
    var compatibility = document.getElementById('message1')
    var pencent = document.getElementById('Percentage')
    var message = document.getElementById('message2')
    var score = Math.random() * 100;
        score = Math.floor(score) + 1;
        if (score > 80) {
            greetings.innerHTML = 'Congratulation!!'
          compatibility.innerHTML =  yourName.value + ' and ' + NameOfCrush.value + ' are a perfect match of....'
            pencent.innerHTML = score + '%'
            message.innerHTML = 'You are made for each other'
        }
        if (score > 50 && score <=  80) {
            greetings.innerHTML = 'Congratulation!!'
            compatibility.innerHTML =  yourName.value + ' and ' +  NameOfCrush.value + ' are a good match of....'
              pencent.innerHTML = score + '%'
              message.innerHTML = 'With hardwork and dedication you can make it work'
          }
          if (score > 30  && score <=  50) {
            greetings.innerHTML = 'Congratulation!!'
            compatibility.innerHTML =  yourName.value + ' and ' +  NameOfCrush.value + ' are a match of....'
              pencent.innerHTML = score + '%'
              message.innerHTML = 'There is a little chance that, you might end up together but do not raise your hopes up'
          }        
             if (score < 30 ) {
                greetings.innerHTML = 'Oh Sorry!!'
            compatibility.innerHTML =  yourName.value + ' and ' +  NameOfCrush.value + ' are not a match'
              pencent.innerHTML = "<img src ='images/heart.jpg'>"
              message.innerHTML = 'Sorry you are not made for each other, Kindly find another person to love'
          }

}

