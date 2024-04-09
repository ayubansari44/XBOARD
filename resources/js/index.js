
// async function getNews()
// {
//     let response;
//     for (let i = 0; i < magazines.length; i++)
//     {
           
//         let url = "https://api.rss2json.com/v1/api.json?rss_url=" + magazines[i];
//         response = await fetch(url).then((data) => data.json());
//         // console.log(response.items);        
//     }
//     console.log(response.feed.link)
//     return response;
// }

// async function getNews1(magazine)
// {
//         let response;
//         let url = "https://api.rss2json.com/v1/api.json?rss_url=" + magazine;
//         response = await fetch(url).then((data) => data.json());
//         // console.log(response)
//         return response;
// }

// function createAccordianStructure(accordianId)
// {

// }

// function createAccordianStructure()
// {
//     let accordianParent = document.getElementById("accordionElement");
//     console.log(accordianParent)
//     let accordianItem = document.createElement("div");
//         accordianItem.classList.add("accordian-item")
//         // accordianItem.id = accordianId;
//     accordianItem.innerHTML = `
//         <h2 class="accordion-header" id="panelsStayOpen-headingOne">
//                                         <button class="accordion-button" type="button" data-bs-toggle="collapse"
//                                                 data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
//                                                 aria-controls="panelsStayOpen-collapseOne">
//                                                 Accordion Item #1
//                                         </button>
//                                 </h2>
//                                 <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
//                                         aria-labelledby="panelsStayOpen-headingOne">
//                                         <div class="accordion-body" id="accordianBody">
//                                                 <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
//                                                         <div class="carousel-inner" id="carouselInner">
                                                                
//                                                         </div>
//                                                         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
//                                                                 data-bs-slide="prev">
//                                                                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                                                                 <span class="visually-hidden">Previous</span>
//                                                         </button>
//                                                         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
//                                                                 data-bs-slide="next">
//                                                                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                                                                 <span class="visually-hidden">Next</span>
//                                                         </button>
                                                        
//                                                 </div>
//                                         </div>
                                        
//                                 </div>
               
//     `
//     accordianParent.appendChild(accordianItem);
// }
// async function createCard(newsMagazine)
// {
// //     let newsMagazine = await getNews();
//     let newsTitle;
//     let newsAuthor;
//     let newsContent;
//     let newsLink;
//     let newsImage;

//     let innerElement = document.getElementById("carouselInner");
//     for (let i = 0; i < 3; i++)
//     {
//         let data = newsMagazine.items[i];
//         newsTitle = data.title;
//         newsAuthor = data.author;
//         newsContent = data.content
//         newsLink = data.link;
//         newsImage = data.enclosure.link;
//         console.log(newsTitle + "||||||||||||" + newsAuthor, newsContent)
        
         
//         let accordianItem = document.createElement("div");
//         accordianItem.classList.add("carousel-item")
//         if (i == 0)
//         {
//             accordianItem.classList.add("active")
//             }
//     accordianItem.innerHTML = `
//                                 <div class="card" style="object-fit:fill">
//                                     <a href=${newsLink}>
//                                         <img src=${newsImage}
//                                             class="d-block w-100" alt="...">

//                                     </a>
//                                     <div class="card-body">
//                                         <h2>${ newsTitle }</h2>
//                                         <h5>${newsAuthor}</h5>
//                                         <p>${newsContent}
//                                         </p>
                                        
//                                     </div>
//                                 </div>    
                                                                        
//                              `
//     innerElement.appendChild(accordianItem);
//     console.log(newsMagazine.items)
//     }

// }


// async function codeStarter()
// {
//         for (let i = 0; i < 3; i++)
//         {
//                 let newsMag = await getNews1(magazines[i])
//                 let accordianId = newsMag.feed.link;
//                 console.log(newsMag)
//                 createAccordianStructure();
//                 createCarousel();
//                 createCard(newsMag);
//         }
// }

function createCarousel()
{
    let carouselParent = document.getElementById("accordianBody");
    let carouselElement = document.createElement("div");
    carouselElement.innerHTML = `
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                                        <div class="carousel-inner" id="carouselInner">
                                                                
                                                        </div>
                                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="prev">
                                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                <span class="visually-hidden">Previous</span>
                                                        </button>
                                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="next">
                                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                                <span class="visually-hidden">Next</span>
                                                        </button>
                                                        
                                                </div>
    `
    carouselParent.appendChild(carouselElement);
}

// getNews()

function createAccordian(title, id)
{
        console.log(title)
        return `
        <div class="accordion-item" id="card${id}">
                <h2 class="accordion-header" id="heading${id}">
                <button class="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${id}" aria-expanded="true" aria-controls="collaps${id}">
                 ${title}
                </button>
                </h2>
                <div id="collapse${id}" class="collapse" data-parent="#accordianId" aria-labelledby="heading${id}">
                </div>
        </div>
        `
}

function createCarouselOuter(id, innerId)
{
        return `<div id="carouselControls${id}" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner" id="${innerId}">
                </div>
                <button class="carousel-control-prev " type="button" data-bs-target="#carouselControls${id}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon btn-carousel" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next " type="button" data-bs-target="#carouselControls${id}" data-bs-slide="next">
                        <span class="carousel-control-next-icon btn-carousel" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                </button>
                </div>`
}

function createCarouselInner(id, active)
{
        return `
        <div class="carousel-item ${active ? "active" : ""}" id="${id}">
        </div>
        `
}

function createCard1(item)
{
        return `
        <div class="card d-block">
        <img class="card-img-top img-fluid carousel-img" src="${item["enclosure"]["link"]}" alt="card image">
        <div class="card-body">
        <h5 class="card-title">${item["title"]}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item["author"]}</h6>
        <p class="car-subtitle text-secondary">${item["pubDate"]}</p>
        <p class="card-text">${item["description"]}</p>
        <a href="${item["link"]}" class="stretched-link" target="_blank"></a>
        </div>
        </div>
        `
}

 function ID()
{
       
         return Math.random().toString(36).substr(2, 9);
         
}
async function addContent()
{
        for (let i = 0; i < magazines.length; i++)
        {
                let url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURI(magazines[i])}`;
                let data1 = await fetch(url);
                let data= await data1.json()

                //accordian
                let accordianId = ID();
                let accordian = createAccordian(data["feed"]["title"], accordianId);
                document.getElementById("accordianId").innerHTML += accordian;

                if (i === 0)
                {
                        document.getElementById(`collapse${accordianId}`).classList.add("show");
                }

                //carousel
                let carouselId = ID();
                let carouselInnerId = ID();
                let carousel = createCarouselOuter(carouselId, carouselInnerId);
                document.getElementById(`collapse${accordianId}`).innerHTML = carousel;

                let items = data["items"];
                for (j in items)
                {
                        let card = createCard1(items[j]);
                        let innerCarouselCardId = ID();
                        let innerCarouselCard = createCarouselInner(innerCarouselCardId, j == 0);
                        document.getElementById(`${carouselInnerId}`).innerHTML += innerCarouselCard;
                        document.getElementById(`${innerCarouselCardId}`).innerHTML += card;
                }
               
        }
};

addContent();

// createAccordianStructure()
// createCarousel()
// createCard()

// codeStarter()

// console.log(magazines)
// codeStarter()