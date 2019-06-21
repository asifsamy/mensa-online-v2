<template>
    <div>
        <header id="header">
            <div class="header-top">
                <div class="container">
                      <div class="row justify-content-center">
                          <div id="logo">
                            <a href="index.html"><img src="src/user-components/common/static/img/logo.png" alt="" title="" /></a>
                          </div>
                      </div>			  					
                </div>
            </div>
            <div class="container main-menu">
					<div class="row align-items-center justify-content-center d-flex">			
				      <nav id="nav-menu-container">
				        <ul class="nav-menu">
				            <li><router-link to="/index">Home</router-link></li>
                            <li><router-link to="/menu">Food Menu</router-link></li>
				            <li class="menu-has-children"><a href="">Profile</a>
                                <ul>
                                    <li ><a href="#login" class="sf-with-ul menu-item-active">Login/Signup</a></li>
                                    <li><a href="#wallet" class="sf-with-ul menu-item-active">Wallet</a></li>
                                    <li class="menu-has-children"><a href="#settings" class="sf-with-ul menu-item-active">Settings</a>
                                        <ul>
                                            <li><a href="personalinfo.html" class="sf-with-ul menu-item-active">Personal Info</a></li>								
                                            <li><a href="notifications.html" class="sf-with-ul menu-item-active">Notifications</a></li>
                                            <li><a href="language.html" class="sf-with-ul menu-item-active">Language</a></li>
                                            <li class="sf-with-ul menu-item-active"><router-link to="/logout">Log Out</router-link></li>
                                        </ul>
                                    </li>			
                                </ul>
                            </li>
				            <li><router-link to="/cart">Cart</router-link></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li> 
				        </ul>
				      </nav><!-- #nav-menu-container -->					      		  
					</div>
				</div>
        </header><!-- #header -->
    </div>
</template>
<script>
export default {
    
}
</script>