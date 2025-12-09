import './header.css';
import Button from '../Button/Button';
const Header = ()=>{
    return(
        <div className="container mx-auto">
            <header class="header">
                <div class="header-container">
                    <div class="header-col logo-col">
                        <div class="logo">
                            <img src="/uzofin-logo.png" className="" alt="uzofin logo" />
                        </div>
                    </div>
                    <input type="checkbox" id="menu-toggle" />
                    <label for="menu-toggle" class="menu-icon">&#9776;</label>
                    <nav class="header-col nav-col">
                        <ul class="nav-links">
                            <li><a href="#">AI Banking</a></li>
                            <li><a href="#">Payments</a></li>
                            <li><a href="#">Payouts</a></li>
                            <li><a href="#support-section" className="nav-btn">Support</a></li>
                        </ul>
                    </nav>
                    <div class="header-col btn-col">
                        <Button link="#" text="Get Started" style="primaryBtn" />
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header;