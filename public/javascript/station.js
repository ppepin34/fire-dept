// ------- STATION JAVASCRIPT -------

const { render, redirect } = require("express/lib/response");

async function stationClickHandler(event) {
    event.preventDefault();
  

    const response = await fetch('/api/station/employee', {
      method: 'post',
      body: JSON.stringify({
       post_id: id
     }),
      headers: {
        'Content-Type': 'application/json'
     }
   });
  
   if (response.ok) {
     document.location.reload();
   } else {
     alert(response.statusText);
   }
}

// function info() {
//   router.get('/info', (req, res) => {
//     if (req.session.loggedIn) {
//       res.render('info', {
//         // loggedIn: req.session.loggedIn,
//       });
//       return;
//     }
  
//     res.render('info')
//   })
// };

// -------- this is just an easy way to render something if we were not not render specific names per station.
// feel free to comment/delete it out
// all station buttons
const stationBtn = document.getElementsByClassName('stationBtn');
//when you click any station button, open info page
stationBtn.addEventListener('click', res.redirect('/info'));
// --------------------


// when you click station one button, run stationClicked function ( show employees in station one )
document.querySelector('.stationone-btn').addEventListener('click', stationClickHandler);
