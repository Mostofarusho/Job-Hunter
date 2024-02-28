// loader.js

export async function fetchJobDetails(jobId) {
    try {
        const response = await fetch('products.json');
        if (!response.ok) {
            throw new Error('Failed to fetch job details');
        }
        const data = await response.json();
        const foundJob = data.find(job => String(job.id) === jobId);
        if (!foundJob) {
            throw new Error(`Job with ID ${jobId} not found`);
        }
        return foundJob;
    } catch (error) {
        console.error('Error fetching job details:', error);
        throw error; // Rethrow the error to be caught by the error boundary
    }
}
