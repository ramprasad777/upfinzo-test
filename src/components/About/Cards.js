import './about.css';
const Cards = ()=>{
    return(
        <section class="cards-section relative w-full px-8 py-24">
            <div class="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
                <div class="col-span-1 space-y-4 text-left">
                <h2 class="text-4xl text-4xl leading-[1.2] font-normal leading-tight text-white">
                    Our Intelligent <br /> Financial Suite
                </h2>
                <p class="text-gray-300 leading-relaxed max-w-sm flex">
                    <span class="text-teal-300 font-bold">•</span>
                    <span class="px-2">Tools That Accelerate Every Step Of Your Financial Workflow.</span>
                </p>
                </div>

                <div class="lg:col-span-2 grid md:grid-cols-2 gap-10">
                    <div class="card-bg text-white text-left">
                        <h3 class="text-3xl font-normal mb-3 border-l-4 border-cyan-400 ">AI Banking</h3>
                        <p class="text-gray-300 leading-relaxed mb-4 text-lg">
                        Smart, automated digital banking for businesses. Instant onboarding,
                        intelligent insights, and real-time account operations.
                        </p>

                        <div>
                        <p class="text-3xl"><span class="text-teal-300">•</span> 3,969</p>
                        <span class="text-gray-400 text-lg tracking-widest uppercase">Transactions per second</span>
                        </div>
                    </div>
                    <div class="card-bg text-white text-left">
                        <h3 class="text-3xl font-normal mb-3 border-l-4 border-yellow-400">Payments</h3>
                        <p class="text-gray-300 leading-relaxed mb-4 text-lg">
                        Fast, secure, and scalable payment infrastructure. Send and receive
                        money globally with ease.
                        </p>

                        <div>
                        <p class="text-3xl"><span class="text-teal-300">•</span> 1,675</p>
                        <span class="text-gray-400 text-lg tracking-widest uppercase">Validator Nodes</span>
                        </div>
                    </div>
                    <div class="card-bg text-white text-left">
                        <h3 class="text-3xl font-normal mb-3 border-l-4 border-purple-400">Payouts</h3>
                        <p class="text-gray-300 leading-relaxed mb-4 text-lg">
                        Bulk, automated payouts built for high-volume businesses. Reliable,
                        trackable, and lightning-fast disbursements.
                        </p>

                        <div>
                        <p class="text-3xl"><span class="text-teal-300">•</span> 163,077,581,394</p>
                        <span class="text-gray-400 text-lg tracking-widest uppercase">Total Transactions</span>
                        </div>
                    </div>
                    <div class="card-bg text-white text-left">
                        <h3 class="text-3xl font-normal mb-3 border-l-4 border-green-400">Merchant Onboarding</h3>
                        <p class="text-gray-300 leading-relaxed mb-4 text-lg">
                        Frictionless onboarding for merchants at any scale. Automated KYC,
                        verification, and risk assessments—done in minutes.
                        </p>

                        <div>
                        <p class="text-teal-300 text-3xl">100%</p>
                        <span class="text-gray-400 text-lg tracking-widest uppercase">
                            On-time Merchant <br /> Onboard
                        </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute top-0 left-0 w-96 h-96 bg-green-600 opacity-20 blur-[180px] pointer-events-none"></div>
        </section>
    )
}
export default Cards;