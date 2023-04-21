var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/AcceleronLearning/acceleronlearning.com.git', // Update to point to your repository  
        user: {
            name: 'Daniel Bodnar', // update to use your name
            email: 'daniel.bodnar@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)