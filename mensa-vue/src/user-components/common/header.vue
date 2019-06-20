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
            <div class="container main-menu parent-active"><span class="menu-title">Menu</span> <button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>
                <div class="row align-items-center justify-content-center d-flex parent-active">				
                    <nav id="nav-menu-container" class="parent-active">
                        <ul class="nav-menu sf-js-enabled sf-arrows parent-active" style="touch-action: pan-y;">
                            <li><router-link to="/index">Home</router-link></li>
                            <li><router-link to="/menu">Menu</router-link></li>
                            <li class="menu-has-children"><a href="#profile">Profile</a>
                                <ul>
                                    <li ><a href="#login" class="sf-with-ul menu-item-active">Login/Signup</a></li>
                                    <li><a href="#wallet" class="sf-with-ul menu-item-active">Wallet</a></li>
                                    <li class="menu-has-children"><a href="#settings" class="sf-with-ul menu-item-active">Settings</a>
                                        <ul>
                                            <li><a href="personalinfo.html" class="sf-with-ul menu-item-active">Personal Info</a></li>								
                                            <li><a href="notifications.html" class="sf-with-ul menu-item-active">Notifications</a></li>
                                            <li><a href="language.html" class="sf-with-ul menu-item-active">Language</a></li>
                                            <li><a href="logout.html" class="sf-with-ul menu-item-active">Log Out</a></li>
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

                <nav id="mobile-nav" class="parent-active">
				        <ul class="parent-active" style="touch-action: pan-y;" id="">
				          <li><router-link to="/index">Home</router-link></li>
                            <li><router-link to="/menu">Food Menu</router-link></li>
                            <li class="menu-has-children"><i class="lnr lnr-chevron-down"></i><a href="#profile" class="sf-with-ul">Profile</a>
                                <ul style="display: none;">
                                    <li ><a href="#login" class="sf-with-ul menu-item-active">Login/Signup</a></li>
                                    <li><a href="#wallet" class="sf-with-ul menu-item-active">Wallet</a></li>
                                    <li class="menu-has-children"><i class="lnr lnr-chevron-down"></i><a href="#settings" class="sf-with-ul">Settings</a>
                                        <ul style="display: none;"> 
                                            <li><a href="personalinfo.html" class="sf-with-ul menu-item-active">Personal Info</a></li>								
                                            <li><a href="notifications.html" class="sf-with-ul menu-item-active">Notifications</a></li>
                                            <li><a href="language.html" class="sf-with-ul menu-item-active">Language</a></li>
                                            <li><a href="logout.html" class="sf-with-ul menu-item-active">Log Out</a></li>
                                        </ul>
                                    </li>			
                                </ul>
                            </li>
                            <li><router-link to="/cart">Cart</router-link></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li> 
				        </ul>
				</nav>

            </div>
        </header><!-- #header -->
    </div>
</template>
<script>
export default {
    
}
</script>