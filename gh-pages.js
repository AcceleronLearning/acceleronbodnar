import {
    publish
} from 'gh-pages';
publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'git@github.com:AcceleronLearning/acceleronlearning.com.git', // Update to point to your repository  
        user: {
            name: 'Daniel Bodnar', // update to use your name
            email: 'daniel.bodnar@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!')
    }
)