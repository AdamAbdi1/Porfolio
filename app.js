const resume1 = () => {
    const $resumeh1 = $('<h1>').text('ADAM ABDI').css('text-decoration', 'underline').css('display', 'block').addClass('hov').addClass('color').css('padding-top', '5px')
    $resumeh1.appendTo('#resume')
    const $resumep = $('<p>').text('12234 Parkview Lane, Burnsville, MN 55337 - newacc928@gmail.com - (763) 777 1403').css('display', 'none').addClass('hide')
    $resumep.appendTo('#resume')
    $('.hov').hover(function(){
        $('.hide').css('display', 'block') 
    }, function(){
        $('.hide').css('display', 'none')
    })
    const $resumeh3 = $('<h5>').text('SUMMARY').css('display', 'block').addClass('hov2').addClass('color')
    const $resumeh32 = $('<h5>').text('PROFESSIONAL EXPERIENCE').css('display', 'block').addClass('hov3').addClass('color')
    const $resumeh33 = $('<h5>').text('EDUCATION').css('display', 'block').addClass('hov4').addClass('color')
    const $resumep5 = $('<p>').text('1+ year of Customer Service Experience').css('display', 'none').addClass('hide2')
    const $resumep2 = $('<p>').text('Burnsville Highschool, Burnsville, MN').css('display', 'none').addClass('hide4')
    const $resumep3 = $('<p>').text('Best Buy, Burnsville, MN September 2019-November 2020').css('display', 'none').addClass('hide3')
    const $resumep4 = $('<p>').text('Asset Protection Associate').css('display', 'none').addClass('hide3')
    const $proj = $('<h5>').text('PROJECTS').css('display', 'block').addClass('hov5').addClass('color')
    const $pj = $('<p>').text('#Project 1 Example').css('display', 'none').addClass('hide5')
    $resumeh3.appendTo('#resume')
    $resumep5.appendTo('#resume')
    $resumeh32.appendTo('#resume')
    $resumep3.appendTo('#resume')
    $resumep4.appendTo('#resume')
    $resumeh33.appendTo('#resume')
    $resumep2.appendTo('#resume')
    $proj.appendTo('#resume')
    $pj.appendTo('#resume')
    $('.hov2').hover(function(){
        $('.hide2').css('display', 'block') 
    }, function(){
        $('.hide2').css('display', 'none')
    })
    $('.hov3').hover(function(){
        $('.hide3').css('display', 'block') 
    }, function(){
        $('.hide3').css('display', 'none')
    })
    $('.hov4').hover(function(){
        $('.hide4').css('display', 'block') 
    }, function(){
        $('.hide4').css('display', 'none')
    })
    $('.hov5').hover(function(){
        $('.hide5').css('display', 'block') 
    }, function(){
        $('.hide5').css('display', 'none')
    })
    $('#resume').css('background-color', 'DarkSalmon')
    
}

const aboutMe1 = () => {
    const $abouth1 = $('<h1>').text('About Me').addClass('color').css('color', 'white').css('padding-top', '5px')
    $abouth1.appendTo('#about') 
    const $aboutp = $('<p>').text('I am Adam Abdi, and I am looking for a job in the Software Engineering field, I have been intrested in coding since I was young.  I am currently enrolled in a coding bootcamp to evolve my skills as a programmer.  I am a team player, dedicated and open-minded.  After I gradute from this bootcamp I will have the necessary tool to excel inside of a work place.').css('color', 'white')
    $aboutp.appendTo('#about')
    $('#about').css('background-color', 'DarkOrchid')
    
    const $form = $('<form>').attr('id', 'form')
    $form.appendTo('#about')
    
    const $label = $('<label>').text('What is your favorite fruit? ').css('color', 'white')
    
    const $input = $('<input>').attr('id', 'val').attr('type', 'text')
    // const $val = $('#val').val()
    $label.appendTo('#about')
    $input.appendTo('#about')
    const $input1 = $('<input>').attr('type', 'submit').attr('value', 'Submit').attr('id', 'sub').css('background-color', 'grey')
    $input1.appendTo('#about')
    // const $formp = $('<p>').text(`Well my favorite fruit is ${$val}!`).attr('id', 'ee')
    // $formp.insertAfter('#sub')
    
}

const myFav = () => {
    const $val = $('#val').val()
    const $formp = $('<p>').text(`Well my favorite fruit is also ${$val}!`)
    $formp.insertAfter('#sub')
}

const welcome1 = () => {
    const $div = $('<div>').css({'height': '100%', 'width': '100%', 'display': 'flex', 'postion': 'fixed', 'align-items': 'center', 'justify-content': 'center'})
    $div.appendTo('#wel')
    const $welh1 = $('<h1>').text('Welcome').addClass('color').css('text-align', 'center')
    $welh1.appendTo($div)
    const $welp2 = $('<p>').text('My name is Adam Abdi and this is my portfolio').css('text-align', 'center')
    $welp2.appendTo('#wel')
    $('body').css({'max-width': '100%', 'max-height': '100%'})
    $('#wel').css('background-color', 'Beige')
    const $img = $('<img>').attr('src', 'https://www.freepnglogos.com/uploads/mountain-png/mountain-png-transparent-mountain-images-pluspng-29.png').css({'height': '400'})
    $img.appendTo('#wel')
}

const changeColor = () => {
    color = ['red', 'blue', 'green', 'Aquamarine', 'BlueViolet', 'BurlyWood', 'DarkCyan', 'DarkGoldenRod', 'Pink']
    $('.color').css('color', color[Math.floor(Math.random() * color.length)])
}

const links = () => {
    const $divlink = $('<div>').css({'overflow': '', 'background-color': '#333', 'float': 'left', 'display': 'block', 'color': '#f2f2f2', 'text-align': 'center', 'padding': '14px', 'text-decoration': 'none', 'width': '300', 'padding-right': '1000'})
    // $divlink.appendTo('body')
    $('body').prepend($divlink)
    const $link = $('<a>').attr('href', 'aboutMe.html').text('About Me').addClass('about').css({'color': 'white', 'padding-left': '5px'})
    const $link2 = $('<a>').attr('href', 'resume.html').text('Resume').addClass('res').css({'color': 'white', 'padding-left': '5px'})
    const $link3 = $('<a>').attr('href', 'index.html').text('Home').addClass('wel').css({'color': 'white', 'padding-left': '5px'})
    const $link4 = $('<a>').attr('href', 'https://github.com/AdamAbdi1').css({'color': 'white', 'padding-left': '5px'}).addClass('fa fa-github')
    const $link5 = $('<a>').attr('href', 'https://www.linkedin.com/in/adam-abdi-3675271b7/').addClass('fa fa-linkedin-square').css({'color': 'white', 'padding-left': '5px'})
    $link3.appendTo($divlink)
    $link.appendTo($divlink)
    $link2.appendTo($divlink)
    $link4.appendTo($divlink)
    $link5.appendTo($divlink)
}

const footer = () => {

}

$(() =>{
    resume1()
    aboutMe1()
    welcome1()
    $('#4').on('click', changeColor)
    links()
    $('#sub').on('click', myFav)
    // const $meta = $('<meta>').attr('name','viewport').attr('content', 'width=device-width, initial-scale=1')
    // $meta.appendTo('head')
})