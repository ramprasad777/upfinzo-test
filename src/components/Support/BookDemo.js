import './support.css';
import Button from '../Button/Button';
const BookDemo = ()=>{
    return(
        <div id="support-section" class="book-demo-section relative max-w-screen-xl mx-auto px-4 py-24 text-center">
            <h1 class="text-5xl font-normal leading-tight text-transparent mb-6">
                <span class="text-white">The future of your <br />industry</span> <span class="bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold">starts here</span>
            </h1>
            <div class="space-x-4">
                <Button link="#" text="Book A Demo" style="primaryBtn" />
                <Button link="#" text="Build AI" style="secondaryBtn" /> 
            </div>
        </div>
    )
}
export default BookDemo;