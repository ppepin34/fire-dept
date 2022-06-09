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

const stationBtn = document.getElementsByClassName('stationBtn');
stationBtn.addEventListener('click', res.redirect('/info'));

  
document.querySelector('.stationone-btn').addEventListener('click', stationClickHandler);
 