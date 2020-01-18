<template>
    <div>
    <b-container v-cloak>
    
            <!--Grid/list switching icons-->
            <div class="tool-bar">
                <select class="float-left" name="prop-filter">
                    <option value="">Sort by Newest</option>
                    <option value="">Sort by Oldest</option>
                    <option value="">Sort by Price (High to low)</option>
                    <option value="">Sort by Price (Low to high)</option>
                </select>	
                <a class="list-icon" v-b-tooltip.hover title="List" v-on:click="layout = 'list'" :class="{ 'active': layout == 'list'}" ></a>
                <a class="grid-icon" v-b-tooltip.hover title="Grid" v-on:click="layout = 'grid'" :class="{ 'active': layout == 'grid'}"></a>
            </div>
            <!--End grid/list switching icons-->
            
            <!--Grid-->
            <div v-if="layout === 'grid'" class="grid">
                <b-row>
                    <b-col class="my-3" cols="12" md="4" v-for="(apartment, id) in apartments" :key="id">
                        <div class="property-grid-card">
                            <div class="wrap">
                                <img width="200" :src="apartment.img">
                                <span class="promoted-badge" v-if="apartment.promoted == 'Promoted'">{{ apartment.promoted }}</span>
                                <span class="type-badge">{{apartment.type }}</span>
                                <span class="contract-badge">{{apartment.contract }}</span>
                               <nuxt-link :to="'/properties/' + property">
                                   <h5 class="my-2">{{ apartment.title }}</h5>
                                </nuxt-link>
                                <h4 class="text-left pl-3"><b>{{ apartment.price }}</b></h4>
                                <hr>
                                <b-row class="promoted-property-info text-left">
                                <b-col class="ml-2">
                                    <p>Type: <b>{{apartment.type }}</b></p>
                                    <p>Floor: <b>{{apartment.floor }}</b></p>
                                </b-col>
                                <b-col>
                                    <p>Location: <b>{{apartment.location }}</b></p>
                                    <p>Rooms: <b>{{apartment.rooms }}</b></p>
                                </b-col>
                                </b-row>
                                <b-button class="btn-style2 mt-3" block type="submit" >More details</b-button>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </div>
            <!--End Grid-->

            <!--List-->
            <div v-if="layout === 'list'" class="list">
                
               <b-row>
                    <b-col class="my-3" cols="12" v-for="(apartment, id) in properties" :key="id">
                        <div class="">
                        <div class="wrap">
                            <b-row>
                                <b-col cols="12" md="4">
                                    <img width="200" :src="apartment.img">
                                    <span class="promoted-badge" v-if="apartment.promoted == 'Promoted'">{{ apartment.promoted }}</span>
                                    <span class="type-badge">{{apartment.type }}</span>
                                    <span class="contract-badge">{{apartment.contract }}</span>
                                </b-col>
                                <b-col cols="12" md="8">
                                    <h5 class="my-2">{{ apartment.title }}</h5>
                                    <h4 class="text-left pl-3"><b>{{ apartment.price }}</b></h4>
                                    <hr>
                                    <b-row class="promoted-property-info text-left">
                                    <b-col class="ml-2">
                                        <p>Type: <b>{{apartment.type }}</b></p>
                                        <p>Floor: <b>{{apartment.floor }}</b></p>
                                    </b-col>
                                    <b-col>
                                        <p>Location: <b>{{apartment.location }}</b></p>
                                        <p>Rooms: <b>{{apartment.rooms }}</b></p>
                                    </b-col>
                                    </b-row>
                                    <b-button class="btn-style2 mt-3" block type="submit" >More details</b-button>
                                </b-col>
                            </b-row>
                            
                        
                            
                        </div>
                        </div>  
                    </b-col>
                </b-row>  
            </div>
            <!--End List-->

        </b-container>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                layout: 'list',

		properties: [
          { 
            "id": "1",
            "img":"https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "title": "Title 1",
            "description": "Description 1",
            "promoted": "Promoted",
            "type": "Apartment",
            "contract": "Sale",
            "price": "2500$",
            "floor": "3/10",
            "location": "California",
            "rooms": "5"
          },

          { 
            "id": "2",
             "img": "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "title": "Title 2",
            "description": "Description 2",
            "promoted": "Promoted",
            "type": "Apartment",
            "contract": "Sale",
            "price": "2500$",
            "floor": "3/10",
            "location": "New Jersey",
            "rooms": "5"
          },

          { 
            "id": "3",
             "img": "https://images.pexels.com/photos/2745093/pexels-photo-2745093.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "title": "Title 3",
            "description": "Description 3",
            "promoted": "Promoted",
            "type": "Apartment",
            "contract": "Sale",
            "price": "2500$",
            "floor": "3/10",
            "location": "New York",
            "rooms": "5"
          },

          { 
            "id": "4",
             "img": "https://images.pexels.com/photos/189293/pexels-photo-189293.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "title": "Title 4",
            "description": "Description 4",
            "promoted": "Promoted",
            "type": "Apartment",
            "contract": "Sale",
            "price": "2500$",
            "floor": "3/10",
            "location": "California",
            "rooms": "5"
          },

          { 
            "id": "5",
             "img": "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "title": "Title 5",
            "description": "Description 5",
            "promoted": "Promoted",
            "type": "Apartment",
            "contract": "Sale",
            "price": "2500$",
            "floor": "3/10",
            "location": "California",
            "rooms": "5"
          },

          { 
            "id": "6",
             "img": "https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "title": "Title 6",
            "description": "Description 6",
            "promoted": "Promoted",
            "type": "Apartment",
            "contract": "Sale",
            "price": "2500$",
            "floor": "3/10",
            "location": "California",
            "rooms": "5"
          },

          { 
            "id": "7",
             "img": "https://images.pexels.com/photos/209274/pexels-photo-209274.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "title": "Title 7",
            "description": "Description 7",
            "promoted": "Promoted",
            "type": "Apartment",
            "contract": "Sale",
            "price": "2500$",
            "floor": "3/10",
            "location": "California",
            "rooms": "5"
          },

          { 
            "id": "8",
            "img": "https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "title": "Title 8",
            "description": "Description 8",
            "promoted": "Promoted",
            "type": "House",
            "contract": "Sale",
            "price": "2500$",
            "floor": "3/10",
            "location": "California",
            "rooms": "5"
          },

          { 
            "id": "9",
            "img": "https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "title": "Title 9",
            "description": "Description 9",
            "promoted": "Promoted",
            "type": "Apartment",
            "contract": "Sale",
            "price": "2500$",
            "floor": "2/10",
            "location": "California",
            "rooms": "5"
          },

          { 
            "id": "10",
            "img": "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "title": "Title 10",
            "description": "Description 10",
            "promoted": "Promoted",
            "type": "Apartment",
            "contract": "Rent",
            "price": "800$",
            "floor": "5/10",
            "location": "California",
            "rooms": "5"
          },
        ],

            }
        }
        	
	}
</script>

<style lang="scss" scoped>
[v-cloak] {
		
		display: none;
}

/* The tool bar */
.tool-bar {
    background: $color1-light;
	box-shadow: 0 1px 1px #ccc;
	line-height: 1;
	margin: 0 auto;
	padding: 10px;
	position: relative;
	text-align: right;
    width: 100%;
    
    select {
        padding: 4px 10px;
        &:focus {
            outline: none!important;
        }
    }
}

.tool-bar a {
	background: rgba( 0, 0, 0, 0.40 ) center center no-repeat;
	border: 1px solid #e4e4e4;
	border-right: 1px solid #908f8f;
	border-bottom: 1px solid #908f8f;
	cursor: pointer;
	display: inline-block;
	height: 32px;
	margin-right: 5px;
	text-decoration: none;
	width: 32px;
}


.tool-bar a.active {
	background-color: rgba( 0, 0, 0, 0.80 );
	border: 1px solid #908d8d;
	border-right: 1px solid #e2e2e2;
	border-bottom: 1px solid #e2e2e2;
}

.tool-bar a.active:hover {
	cursor: default;
}

.tool-bar a.list-icon {
	background-image: url( "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzNkFCQ0ZBMTBCRTExRTM5NDk4RDFEM0E5RkQ1NEZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzNkFCQ0ZCMTBCRTExRTM5NDk4RDFEM0E5RkQ1NEZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjM2QUJDRjgxMEJFMTFFMzk0OThEMUQzQTlGRDU0RkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjM2QUJDRjkxMEJFMTFFMzk0OThEMUQzQTlGRDU0RkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7h1bLqAAAAWUlEQVR42mL8////BwYGBn4GCACxBRlIAIxAA/4jaXoPEkMyjJ+A/g9MDJQBRhYg8RFqMwg8RJIUINYLFDmBUi+ADQAF1n8ofk9yIAy6WPg4GgtDMRYAAgwAdLYwLAoIwPgAAAAASUVORK5CYII=" );
}

.tool-bar a.grid-icon  {
	background-image: url( "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBEQkMyQzE0MTBCRjExRTNBMDlGRTYyOTlBNDdCN0I4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBEQkMyQzE1MTBCRjExRTNBMDlGRTYyOTlBNDdCN0I4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MERCQzJDMTIxMEJGMTFFM0EwOUZFNjI5OUE0N0I3QjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MERCQzJDMTMxMEJGMTFFM0EwOUZFNjI5OUE0N0I3QjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4MjPshAAAAXklEQVR42mL4////h/8I8B6IGaCYKHFGEMnAwCDIAAHvgZgRyiZKnImBQsACxB+hNoDAQyQ5osQZIT4gH1DsBZABH6AB8x/JaQzEig++WPiII7Rxio/GwmCIBYAAAwAwVIzMp1R0aQAAAABJRU5ErkJggg==" );
}

/* Grid layout */
.grid {
	list-style: none;
	margin: 0 auto;
	padding: 20px;
	text-align: left;
	width: 100%;
}

.grid li {
	display: inline-block;
	position: relative;
	width: 50%;
}

.grid li:after {
	content: "";
	display: block;
	padding-bottom: 52%;
}

.grid li a {
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border: 2px solid #fff;
	height: 99%;
	position: absolute;
	width: 98%;
}

.grid li a:hover {
	border: 2px solid #000;
	box-shadow:         inset 0 0 90px -10px rgba( 0, 0, 0, 1 );
	-moz-box-shadow:    inset 0 0 90px -10px rgba( 0, 0, 0, 1 );
	-webkit-box-shadow: inset 0 0 90px -10px rgba( 0, 0, 0, 1 );
}

/* List layout */
.list {
	list-style: none;
	margin: 0 auto;
	padding: 0;
	text-align: left;
	width: 100%;
}

.list li {
	border-bottom: 1px solid #fff;
	overflow: hidden;
	padding: 20px;
	transition: background 0.2s linear;
}

.list li:hover {
	background-color: #fff;
}

.list li a {
	display: table;
	width: 100%;
}


.list li img {
	border: none;
	display: table-cell;
	height: 120px;
	vertical-align: middle;
	width: 120px;
}

.list li:hover p {
	color: #0096d4;
}

.list li p {
	color: #000;
	display: table-cell;
	font-weight: 700;
	padding: 0 0 0 15px;
	vertical-align: middle;
	width: 100%;
}

/*Properties animation*/
/*End properties animation*/
</style>