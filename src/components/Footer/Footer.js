import '../text-gradient.css';
const Footer = ()=>{
    return(
        <footer class="w-full bg-[#0b0b0b] text-gray-300 py-16">
            <div class="max-w-7xl mx-auto px-6">
                <div class="border-t border-gray-800 mb-12"></div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="flex flex-col sm:flex-row md:flex-col gap-4">
                        <img 
                            src="/UzoFin-Logo-footer.png"
                            alt="UzOFIN Logo"
                            class="w-40 mb-2"
                        />
                        <p class="text-gray-400 text-sm leading-relaxed max-w-xs text-left">
                            Experience the new age of payments with UzOFin and explore new growth opportunities 
                            to reach greater heights
                        </p>
                    </div>
                    <div class="md:col-span-2">
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left text-gray-400">
                            <div>
                                <h3 class="text-blue-400 text-sm font-semibold uppercase tracking-wide blue-text-gradient">Products</h3>
                                <ul class="space-y-3 mt-4 text-sm">
                                    <li><a href="#" class="hover:text-white">AI Banking</a></li>
                                    <li><a href="#" class="hover:text-white">Payment</a></li>
                                    <li><a href="#" class="hover:text-white">Payout</a></li>
                                    <li><a href="#" class="hover:text-white">Merchant Onboarding</a></li>
                                    <li><a href="#" class="hover:text-white">FRM</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="text-blue-400 text-sm font-semibold uppercase tracking-wide blue-text-gradient">Company</h3>
                                <ul class="space-y-3 mt-4 text-sm">
                                    <li><a href="#" class="hover:text-white">About Us</a></li>
                                    <li><a href="#" class="hover:text-white">Help Center</a></li>
                                    <li><a href="#" class="hover:text-white">Contact</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="text-blue-400 text-sm font-semibold uppercase tracking-wide blue-text-gradient">Legal</h3>
                                <ul class="space-y-3 mt-4 text-sm">
                                    <li><a href="#" class="hover:text-white">Cookie Policy</a></li>
                                    <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
                                    <li><a href="#" class="hover:text-white">Terms of Service</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="text-blue-400 text-sm font-semibold uppercase tracking-wide blue-text-gradient">Social</h3>
                                <ul class="space-y-4 mt-4 text-sm">
                                    <li class="flex items-center gap-3">
                                        <a href="#" class="hover:text-white flex justify-center items-center">
                                            <div class="icon-holder w-8 h-8 rounded-full border-blue-900 bg-gray-700 flex items-center justify-center">
                                                <i class="fa-brands fa-linkedin-in text-white text-sm">
                                                    <img 
                                                    src="/social-icons/linkedin.svg" 
                                                    alt="LinkedIn"
                                                    />
                                                </i>
                                            </div>
                                            <span class="px-1">/uzofin</span>
                                        </a>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <a href="#" class="hover:text-white flex justify-center items-center">
                                            <div class="icon-holder w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-600 flex items-center justify-center">
                                                <i class="fa-brands fa-linkedin-in text-white text-sm">
                                                    <img 
                                                    src="/social-icons/twitter.svg" 
                                                    alt="Twitter"
                                                    />
                                                </i>
                                            </div>
                                            <span class="px-1">/uzofin</span>
                                        </a>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <a href="#" class="hover:text-white flex justify-center items-center">
                                            <div class="icon-holder w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                                <i class="fa-brands fa-linkedin-in text-white text-sm">
                                                    <img 
                                                    src="/social-icons/instagram.svg" 
                                                    alt="Instagram"
                                                    />
                                                </i>
                                            </div>
                                            <span class="px-1">/uzofin</span>
                                        </a>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <a href="#" class="hover:text-white flex justify-center items-center">
                                            <div class="icon-holder w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-700 flex items-center justify-center">
                                                <i class="fa-brands fa-linkedin-in text-white text-sm">
                                                    <img 
                                                    src="/social-icons/facebook.svg" 
                                                    alt="Facebook"
                                                    />
                                                </i>
                                            </div>
                                            <span class="px-1">/uzofin</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="border-t border-gray-800 mt-14 pt-6 flex justify-between text-sm text-gray-400">
                    <p>Copyright © 2025 UzOFin. All rights reserved</p>
                    <p>India (EN)</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;