(async () => {
    const data = [];

    var posts = document.querySelectorAll('._anz0._amkz.message-in.focusable-list-item._amjy._amjz._amj-._as4s._amjw');
    var postsCount = 0;

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    for (const post of posts) {
        var img = post.getElementsByClassName('x14tgpju')[0];
        var img_alt = img.getAttribute('alt');
    
        if (img_alt.includes('HURRY UP AND CAST YOUR VOTES!')) {
            postsCount += 1;
    
            const schoolMatch = img_alt.match(/Introducing,\s*\*([^*]+)\*/);
            const total_reactions = post.getElementsByClassName('x1f6kntn x2b8uid x1f6z2i5')[0].textContent;
    
            const button = post.getElementsByClassName('xd7y6wv')[0];
            button.click();
    
            await delay(10); // OPTIONAL (Added to avoid crashes)
    
            post.scrollIntoView();
            
            const hearts = document.getElementsByClassName('x1n2onr6 xh8yej3 xuyqlj2 x1lumt5c xw2csxc x1odjw0f')[0];
            const heart_count = hearts.getElementsByClassName('_ak8q')[0].textContent;
            
            await delay(10); // OPTIONAL (Added to avoid crashes)
    
            if (schoolMatch) {
                const schoolName = schoolMatch[1].trim();
                console.log(`${postsCount}) ${schoolName} => ${heart_count}`);

                data.push({ schoolName: schoolName, totalPoints: heart_count });
            } else {
                console.log(`${postsCount}) ERR WHILE READING THE SCHOOL NAME`);
            }
    
        }
    }

    console.log(`Posts count: ${postsCount}`);
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const link = document.createElement('a');

    link.href = URL.createObjectURL(blob);
    link.download = 'data.json';
    link.click();
})();
