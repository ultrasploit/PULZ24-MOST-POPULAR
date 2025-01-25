# PULZ'24 MOST POPULAR SCHOOL ICT SOCIETY

An automated heart reaction counter for the **PULZ'24 Award** for the **Most Popular School ICT Society**

## Features
- Automatically counts heart reactions for posts in the specified WhatsApp channel.
- Displays the individual reaction count for each post.
- Exports the results to a **JSON file** for later use.
- Simple, easy-to-use script for automating the reaction counting process.

## How to Use
1. Open the WhatsApp channel where the posts are located.
2. Scroll to the **first post** (the script requires this to read all the posts).
3. **Inject the code** into the page:
   - Open the **Developer Tools** in your browser:
     - For **Chrome/Edge**: Press `F12` or `Ctrl+Shift+I`.
     - For **Firefox**: Press `F12` or `Ctrl+Shift+I`.
   - Go to the **Console** tab.
   - Paste the JavaScript code into the console.
   - If the browser shows a warning (e.g., "Blocked content"), **bypass it** by typing "allow pasting" and press **Enter**.
   - Press **Enter** to run the script.

## Debugging
- If you encounter any errors:
  - **Reload the tab**, especially the channels section, to reset the script environment.
  - Ensure you're in the **correct WhatsApp channel** where the posts are located.
- If the script is not detecting reactions, make sure all posts have fully loaded.

## How It Works
1. **Scans all posts** in the WhatsApp channel.
2. **Filters the posts** to identify those with reactions.
3. **Looks for heart reactions**, counting them accurately.
4. **Clicks the reaction button** to reveal the individual reaction count.
5. **Exports the results** to a **JSON file**, which can be downloaded and saved for future use.

## Important Notes
- This script is intended for **educational** and **personal** use only.
- Be sure to comply with **WhatsApp's Terms of Service** while using this script.
- The script works only on **WhatsApp Web**.

## License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

## Feedback
If you have any suggestions, need more advanced features, or want to provide feedback, feel free to contact me at [ultrasploit.com/contact](https://ultrasploit.com/contact). Your feedback is always welcome!
