(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,a){e.exports=a(87)},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},79:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(38),r=a.n(l),s=(a(50),a(10)),c=a(11),i=a(13),m=a(12),u=a(14),h=a(9),d=a(15),b=a(8),g=a(39),v=(a(51),function(e){var t=e.children;return o.a.createElement("ul",{className:"list-group"},t)});function f(e){var t=e.children;return o.a.createElement("li",{className:"list-group-item"},t)}var E=function(e){var t,a,n,l=e.title,r=e.authors,s=e.url,c=e.synopsis,i=e.image,m=e.Button,u=(a=255,n="...",(t=c)?(null==a&&(a=100),null==n&&(n="..."),t.length>a?t.substring(0,a-n.length)+n:t):t);return o.a.createElement(f,null,o.a.createElement("div",{className:"media-snippet"},o.a.createElement("article",{className:"media"},o.a.createElement("figure",{className:"media-left"},o.a.createElement("p",null,o.a.createElement("img",{className:"image is-128xauto",src:i,alt:l}))),o.a.createElement("div",{className:"media-content"},o.a.createElement("h3",{className:"heading-title"},l),o.a.createElement("p",{className:"heading-authors"},"by ",r," (Author)"),o.a.createElement("p",{className:"p-books"},u),o.a.createElement("div",{className:"d-flex flex-row bd-highlight mb-3"},o.a.createElement("div",{className:"p-2 bd-highlight"},o.a.createElement("a",{href:s,className:"btn view-button heading-authors ml-2",target:"_blank",rel:"noopener noreferrer"},"View")),o.a.createElement("div",{className:"p-2 bd-highlight"},o.a.createElement(m,null)))))))};a(52);var p=function(e){var t=e.q,a=e.handleInputChange,n=e.handleFormSubmit;return o.a.createElement("form",{className:"form-inline",role:"form"},o.a.createElement("div",{className:"form-group mx-sm-3 mb-2"},o.a.createElement("label",{htmlFor:"Title",className:"sr-only"},"Search Book Title"),o.a.createElement("input",{className:"form-control heading-subtitle ",id:"Title",type:"text",value:t,placeholder:"Book Title...",name:"q",onChange:a,size:"55",required:!0})),o.a.createElement("button",{onClick:n,type:"submit",className:"btn btn-lg search-button heading-subtitle"},"Search"))},k=a(18),N=a.n(k),w={getBooks:function(e){return N.a.get("/api/google",{params:{q:"title:"+e}})},getSavedBooks:function(){return N.a.get("/api/books")},deleteBook:function(e){return N.a.delete("/api/books/"+e)},saveBook:function(e){return N.a.post("/api/books",e)}},B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],q:"",message:"Simply search for books via the Google Books API"},a.handleInputChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(g.a)({},n,o))},a.getBooks=function(){w.getBooks(a.state.q).then(function(e){return a.setState({books:e.data,currentPage:1})}).catch(function(){h.b.error("Your search did not match any book results."),a.setState({books:[],message:"Your search did not match any book results.",currentPage:1})})},a.handleFormSubmit=function(e){e.preventDefault(),h.b.info("Searching books... !"),a.getBooks()},a.handleBookSave=function(e){var t=a.state.books.find(function(t){return t.id===e});w.saveBook({googleId:t.id,title:t.volumeInfo.title,url:t.volumeInfo.infoURL,authors:t.volumeInfo.authors,synopsis:t.volumeInfo.synopsis,image:t.volumeInfo.imageLinks.thumbnail}).then(function(){return a.getBooks()})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-10 col-centered"},o.a.createElement("div",{className:"d-flex flex-wrap flex-row bd-highlight mb-3 justify-content-center align-items-center"},o.a.createElement("div",{className:"order-sm-2 p-2 bd-highlight"},o.a.createElement("img",{className:"image-250",src:"/images/img-books-window.jpg",alt:"React Google Books Search"})),o.a.createElement("div",{className:"order-sm-1 p-2 bd-highlight"},o.a.createElement("h1",{className:"heading-title mx-sm-3 mb-2"},"React Google Books Search"),o.a.createElement("h2",{className:"heading-subtitle mx-sm-3 mb-2"},"Search for and Save Books of Interest."),o.a.createElement(p,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,q:this.state.q}))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-10 col-centered card-content mb-4"},o.a.createElement("h1",{className:"heading-title mx-sm-3 mb-2 text-center"},"Results"),this.state.books.length?o.a.createElement(v,null,this.state.books.map(function(t){return o.a.createElement(E,{key:t.id,title:t.volumeInfo.title,url:t.volumeInfo.infoURL,authors:t.volumeInfo.authors.join(", "),synopsis:t.volumeInfo.synopsis,image:t.volumeInfo.imageLinks.thumbnail,Button:function(){return o.a.createElement("button",{onClick:function(){return e.handleBookSave(t.id)},className:"btn save-button  heading-subtitle ml-2"},"Save")}})})):o.a.createElement("div",{className:"mockup-content"},o.a.createElement("h2",{className:"heading-title text-center"},this.state.message)))))}}]),t}(n.Component),y=a(23),S=a.n(y),x=a(42),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},a.getSavedBooks=function(){w.getSavedBooks().then(function(e){return a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a.handleBookDelete=function(){var e=Object(x.a)(S.a.mark(function e(t){var n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.state.books,e.prev=1,e.next=4,w.deleteBook(t).then(function(e){return a.getSavedBooks()});case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),e.t0.response&&404===e.t0.response.status&&h.b.error("This book has been deleted."),a.setState({books:n});case 10:case"end":return e.stop()}},e,null,[[1,6]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getSavedBooks()}},{key:"render",value:function(){var e=this,t=this.state.books.length;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-8 col-centered"},o.a.createElement("div",{className:"d-flex flex-row bd-highlight mb-3 justify-content-center align-items-center"},o.a.createElement("div",{className:"p-2 bd-highlight"},o.a.createElement("img",{className:"image-250",src:"/images/img-books-window.jpg",alt:"React Google Books Search"})),o.a.createElement("div",{className:"p-2 bd-highlight"},o.a.createElement("h1",{className:"heading-title mx-sm-3 mb-2"},"React Google Books Search"),o.a.createElement("h2",{className:"heading-subtitle mx-sm-3 mb-2 text-center"},"Showing ",t," books in the database."))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-8 col-centered card-content"},this.state.books.length?o.a.createElement(v,null,this.state.books.map(function(t){return o.a.createElement(E,{key:t._id,title:t.title,url:t.url,authors:t.authors.join(", "),synopsis:t.synopsis,image:t.image,Button:function(){return o.a.createElement("button",{onClick:function(){return e.handleBookDelete(t._id)},className:"btn delete-button heading-subtitle ml-2"},"Delete")}})})):o.a.createElement("div",{className:"mockup-content"},o.a.createElement("h2",{className:"brand-title text-center"},"No saved books in the database")))))}}]),t}(n.Component),I=function(){return o.a.createElement("h1",{className:"heading-title text-center"},"404 Page Not Found")},O=(a(79),function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},o.a.createElement(d.b,{className:"navbar-brand brand-title",to:"#"},"Google Books Search"),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(d.b,{className:"nav-link heading-title",to:"/search"},"Search")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(d.b,{className:"nav-link heading-title",to:"/saved"},"Saved"))))))}),C=(a(84),function(){return o.a.createElement("footer",{className:"footer navbar-fixed-bottom has-background-tan text-center heading-authors"},o.a.createElement("p",null,"Made with react"))}),q=(a(85),a(86),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,null),o.a.createElement("section",{className:"hero-is-fullheight"},o.a.createElement("div",{className:"head-head"},o.a.createElement(O,null)),o.a.createElement("div",{className:"head-body"},o.a.createElement(b.d,null,o.a.createElement(b.b,{path:"/search",component:B}),o.a.createElement(b.b,{path:"/saved",component:j}),o.a.createElement(b.b,{path:"/not-found",component:I}),o.a.createElement(b.a,{from:"/",exact:!0,to:"/search"}),o.a.createElement(b.a,{to:"/not-found"}))),o.a.createElement("div",{className:"head-foot"},o.a.createElement(C,null)))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.84990972.chunk.js.map