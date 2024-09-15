const visitCountElement = document.getElementById('visit-count');
//fetch count from db
const apiEndpoint = 
'https://a3xrz54ygk.execute-api.us-east-1.amazonaws.com/prod/lambda_function'
let visitCount
async function getVisitCount() {
    try {
    
        const response = await fetch(apiEndpoint);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Parse the JSON response
        const data = await response.json();
        if (data.visit_count !== undefined) {
            visitCountElement.textContent = data.visit_count;
        } else {
            visitCountElement.textContent = 'Visit count data not available';
        }
        
    }
    catch (error) {
        console.error('Error fetching visit count:', error);
    }
}

getVisitCount()