export const duburi_auv = {
    "Duburi 4.0": {
        "AUV Specification": {
            "Weight (in Air)": "52.9109 lbs. (24 kg)",
            "Hull": "Marine 5083 grade aluminum, acrylic windows with brass frames",
            "Dimensions": "16x12x6 inches",
            "Propulsion": "4x Blue Robotics T100 Thruster, 4x Blue Robotics T200 Thruster",
            "Power": "2x 12V 5400 mAh LiPo Batteries",
            "Underwater Connections": "Ethernet and Fiber Optic cable",
            "Cameras": "2x Blue Robotics 1080 P Low light cameras",
            "Navigation Sensors": "Pressure Sensor (Bar 30 Depth Sensor), INS (Vectornav VN200)",
            "Main Computer": "Jetson Nano Developer Kit",
            "Embedded Computer (Control)": "AT mega 2560 & Pixhawk Flight Controller"
        },
        "Mechanical System": {
            "Hull Design": "Octagonal shape for reduced drag and improved hydrodynamics",
            "Torpedo Design": "Elastic force induced propulsion system with two torpedoes",
            "Grabber Design": "Custom-made grabber with a two-finger design and Sharp sensor for object proximity"
        },
        "Electrical Architecture": {
            "Power-flow": "Two LiPo Batteries with DIY underwater switches for emergency power cut-off",
            "Navigation System": "Vectornav VN-200 GNSS aided INS",
            "Micro-controller": "32 bit STM32 based Pixhawk integrated with Vectornav VN200 INS"
        },
        "Software Architecture": {
            "Simulation": "Unity-based technical testing environment",
            "Interfacing": "Arduino Mega as the control surface for sensor payloads and actuators"
        }
    },
    "Duburi 3.0": {
        "AUV Specification": {
            "Weight (in Air)": "61 lbs. (27.7 kg)",
            "Hull": "Aluminum chassis with openings for cameras",
            "Dimensions": "21x17x8 inches",
            "Propulsion": "8x Blue Robotics T100 Thruster",
            "Power": "2x 12V 10,000 mAh LiPo Batteries (in series)",
            "Underwater Connections": "SubConn Power, Circular, Micro Circular, Ethernet, and Coax series",
            "Cameras": "3x Blue Robotics 1080 P Low light cameras",
            "Navigation Sensors": "Pressure Sensor (Bar 30 Depth Sensor), IMU (Gy-88, SparkFun 9 Degrees of Freedom MU Breakout - LSM9DSO), Hydrophones (2x Teledyne Reson TC4013)",
            "Main Computer": "Jetson Nano Developer Kit",
            "Embedded Computer (Control)": "AT mega 2560"
        },
        "Mechanical System": {
            "Hull Design": "Full aluminum chassis, 8 thruster design for better maneuverability",
            "Torpedo Design": "Self-propelled torpedo with reverse engineered DC motor, 3D printed components"
        },
        "Electrical Architecture": {
            "PCB Design": "Custom designed PCB for sensor and electrical component connectivity",
            "Navigation System": "GY-88 for compass and orientation, robust computer vision implementation"
        },
        "Software Architecture": {
            "Simulation": "Unity-based simulation environment for technical testing",
            "Interfacing": "Arduino Mega for control surface operations"
        }
    },
    "Duburi 2.0": {
        "AUV Specification": {
            "General Overview": "Improved functionality with machine vision, sponsored by RJE International and Blue Robotics",
            "Hull": "Reinforced aluminum chassis",
            "Board Design": "New PCB for better wire management and component hot swapping"
        },
        "Mechanical System": {
            "3D Design": "Efficient space management and hydrodynamic design"
        }
    },
    "Duburi 1.0": {
        "AUV Specification": {
            "General Overview": "First AUV built by undergraduate students in Bangladesh, using PVC pipes for hull and core design",
            "Achievements": "Participated in SUVAC 2018, achieved 7th position"
        }
    }
}
