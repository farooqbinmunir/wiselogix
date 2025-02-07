import FetchData from './FetchData';
export default function Form(){




    // const handleSubmit = async (event) => {
	// 	event.preventDefault();
    //     console.log('dev is testing...');
	// 	const formData = new FormData();
	// 	formData.append("your-name", "John Doe");
	// 	formData.append("your-email", "john@example.com");
	// 	formData.append("your-message", "Hello from Next.js!");
	  
	// 	const response = await fetch("https://wordpress-821607-5011314.cloudwaysapps.com/wp-json/contact-form-7/v1/contact-forms/1167bdc/feedback", {
	// 	  method: "POST",
	// 	  body: formData,
	// 	});
	  
	// 	const data = await response.json();
	// 	console.log(data);
	// };
    return (

        <form style={{
                width: "50%",
                margin: "50px auto",
            }}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="your-name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="your-email" required />
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="your-message" required></textarea>
            
            <button type="submit" style={{marginTop: "20px"}}>Send</button>
        </form>
    );
}