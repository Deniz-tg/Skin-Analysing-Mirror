# Skin-Analysing Smart Mirror

An advanced, AI-powered smart mirror framework built on top of the open-source MagicMirror² platform. This project was developed in the **Summer of 2025**. It transforms a traditional bathroom or hallway mirror into a personal assistant that utilizes an integrated camera to analyze the user's skin, provide tailored skincare advice, and manage daily productivity via smart home integrations.

---

## 🚀 Key Features

* **Biometric Skin Analysis:** Built-in camera support to evaluate facial features and skin conditions, providing real-time feedback and skincare tips.
* **Smart Home Automation:** Integrated with Shelly smart devices for motion-activated behavior and automated power management.
* **Intelligent Lighting Control:** Adaptive lighting setups optimized for accurate camera capturing and facial recognition environments.
* **Todoist API Integration:** Displays your personal task lists, schedules, and daily routines directly on the mirror interface.
* **Modular Ecosystem:** Inherits the full capability of MagicMirror², allowing easy expansion with hundreds of community modules (weather, calendar, news, etc.).

---

## 📂 Core Python Scripts & Component Overview

This repository includes custom backend scripts that handle hardware interaction, automation, and data processing. Below is an overview of the key files:

### 🔬 `analyse.py`
The core logic for the skin analysis system. It interfaces with the built-in camera, captures the user's face, processes the image using computer vision/machine learning libraries, and generates skincare assessments and product recommendations.

### 🔌 `bewegung_shelly.py`
Manages proximity and motion detection using Shelly smart home hardware. This script ensures the mirror dynamically turns on or wakes up from sleep mode when a user steps in front of it, optimizing power consumption.

### 💡 `licht.py`
Controls the mirror's surrounding illumination or external smart lights. It automatically adjusts the brightness and color temperature to ensure the camera in `analyse.py` gets perfect lighting conditions for an accurate skin scan.

### 💬 `compliments.json`
A customized data store containing dynamic text strings and compliments displayed on the mirror's UI, tailored around the skincare and smart mirror interaction.

### 📝 `face_result.txt`
A local data log where the results, scores, and historical outputs of the skin analysis are saved or staged before being rendered on the frontend module.

---

## 🛠️ Prerequisites & Installation

To run this project on a Raspberry Pi, ensure you have the required system dependencies and Python environment set up.

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/Deniz-tg/Skin-Analysing-Mirror.git](https://github.com/Deniz-tg/Skin-Analysing-Mirror.git)
   cd Skin-Analysing-Mirror
