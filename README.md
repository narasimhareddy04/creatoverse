# WEB103 Prework - Creatoverse

Submitted by: Mohana Narasimha Reddy Attunuru

About this web app: Creatoverse is a web app that displays content creators. When you press the "info" button, it shows the details of that specific content creator. You can add new creators by providing their details in the "Add Creator" page. By pressing the "edit" button, you can modify the content creator's details and update them. Additionally, you have the option to delete a specific content creator.🏿 

Time spent: 24 hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->
- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [ ] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [x] Tailwind CSS is used to style the web pages
* [x] Added notifications to the app with react-hot-toast
* [x] Used Spinner component to show the loading stage of the web page 

## Video Walkthrough

Here's a walkthrough of implemented required features:

👉🏿<a href="https://gifyu.com/image/SuX9y"><img src="https://s12.gifyu.com/images/SuX9y.gif" alt="SuX9y.gif" border="0" /></a>

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  👉🏿 ScreenToGif
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

I encountered some difficulties during the development process. Initially, I faced an issue where the newly added content creator was not being displayed on the home page. To resolve this, I passed the state object and added the new creator. However, I later changed this approach by calling the fetch creator method in the "Add Creator" page. Another problem arose when navigating to the "View Creator" page after editing a creator. I corrected this error by creating a new function specifically for editing instead of relying on the onSubmit functionality of the form, which I had previously used in the "Edit Creator" page.

## License

Copyright [👉🏿 2023] [👉🏿 Mohana Narasimha Reddy Attunuru]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
