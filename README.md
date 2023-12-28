# MySurah - Surah Player

MySurah is a mobile app built with the Ionic framework based on Angular that allows users to listen to and recite Surahs from the Holy Quran. It provides a user-friendly interface for accessing and playing Surahs on mobile devices.

<!-- ![MySurah App Screenshot](screenshot.png) -->

## Features

- Access and listen to a collection of Surahs from the Holy Quran.
- Play, pause, and navigate between different Surahs automatically.
- Display the name and reciter of each Surah.
- Simple and intuitive user interface for easy navigation and usage.

## Prerequisites

- Node.js: Make sure you have Node.js installed. You can download it from [https://nodejs.org](https://nodejs.org).
- Android Studio: Make sure you have Android Studio installed and downloaded all the necessary SDK for android development. You can download it from [https://developer.android.com/studio](https://developer.android.com/studio)
- To develop iOS applications, you need to have a MacOS operating system installed on your computer and Xcode, which is the integrated development environment (IDE) used for iOS development, installed on your MacOS.

## Installation and Setup

1. Clone the repository or download the source code:

   ```
   git clone https://github.com/aimaniskndar/MySurah.git
   ```

2. Navigate to the project directory:

   ```
   cd MySurah
   ```

3. Install the dependencies:

   **Note:** A folder named `node_module` will be generated.

   ```
   npm install
   ```

4. Build the app:

   ```
   ionic build
   ```

5. Run the app on a connected Android device or emulator:

   ```
   ionic capacitor run android
   ```

   This will open the app in Android Studio, where you can build and run it on a connected Android device or emulator.

   **Note:** Make sure you have Android Studio installed and configured with the necessary SDKs. Refer to the [Android Studio documentation](https://developer.android.com/studio) for more information on setting up Android development environment.

6. Run the app on a connected iOS device or simulator:

   ```
   ionic capacitor run ios
   ```

   This will open the app in Xcode, where you can build and run it on a connected iOS device or simulator.

   **Note:** For iOS development, it is required to have a MacOS with Xcode installed. Ensure that you have Xcode installed and configured on your MacOS. You can download Xcode from the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12).

   **Note:** Capacitor provides a bridge between your Ionic app and the native platform (Android or iOS). During the first run, Capacitor will copy the necessary files and dependencies to the native project folders (android and ios) so that you can work with the app using the respective platform-specific tools (Android Studio and Xcode).

   Alternatively, you can use the Ionic Lab for a browser-based development and testing environment:

   ```
   ionic serve
   ```

   Ionic Lab allows you to preview and test your app in a browser, with live reloading for easy development.

For more information on how to run and test Ionic apps, refer to the official [Ionic Documentation](https://ionicframework.com/docs).

## Audio Source

The Quranic audio used in this app is sourced from [Muslim Central](https://muslimcentral.com). To use the audio in the app, you

 need to download the Surah audio files from the Muslim Central website. Follow these steps:

1. Visit [Muslim Central](https://muslimcentral.com) and navigate to the Surah audio section.
2. Download the Surah audio files in MP3 format.
3. Create a folder named `sounds` inside the `src/assets` directory of your Ionic project.
4. Copy the downloaded Surah audio files into the `src/assets/sounds` directory.

**Note:** The Surah audio files are not included in the Git repository due to their large file size. Make sure to download the audio files separately and add them to the correct location in your project.

Please ensure compliance with the terms and conditions of Muslim Central when using the audio in your own projects.

## License

The MySurah app is open source and released under the [MIT License](LICENSE). You are free to modify and distribute the app as per the terms of the license.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request. Please follow the guidelines outlined in the [Contributing Guidelines](CONTRIBUTING.md).

## Acknowledgments

- All Quranic audio used in this app are sourced from [Muslim Central](https://muslimcentral.com). Please ensure compliance with the terms and conditions of the source when using the content in your own projects.

## Support

If you have any questions or need assistance with the app, please reach out to us at [contact.aiman.azman@gmail.com](mailto:contact.aiman.azman@gmail.com).

---

Thank you for using MySurah! We hope you find it helpful in reciting and learning from the Holy Quran. May your journey with the Quran be blessed.

For more information about the Ionic framework, visit [https://ionicframework.com](https://ionicframework.com).
