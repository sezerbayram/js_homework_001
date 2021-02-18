


function marketeGit(cllbck) {
    setTimeout(function () {
        console.log('markete gidildi');
      cllbck();
    
    }, 2000);
};

function alisverisYap(mycllbck) {
    setTimeout(function(){
        let fruit = 'armut ve elma '
        console.log('alisveris yapildi ' + fruit + 'alindi!!');
        mycllbck();
    }, 1000);
};
function eveDon() {
    setTimeout(() => {
        
        console.log( 'eve donuldu')
        
    }, 500);
};


marketeGit( cagir => {

   alisverisYap( cagir => {

     eveDon()

     })

});

  


