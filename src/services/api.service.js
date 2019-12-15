class ApiService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async createPost(post) {
        try {
            const request = new Request(
                this.baseUrl + '/posts.json',
                {
                    method: 'post',
                    body: JSON.stringify(post) 
                }
            );
    
            const response = await fetch(request);
            return await response.json();
        } catch (error) {
            console.log(error);
        }
        
    }
}

export const apiService = new ApiService('https://js-native-blog-57831.firebaseio.com');