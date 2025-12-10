---
sidebar_position: 2
---

# Weeks 3-5: ROS 2 Fundamentals

Is module mein hum Robot Operating System 2 (ROS 2) ki buniyadi baaton ko samjhenge. ROS 2 modern robotics projects ka backbone hai, jo alag alag hardware aur software components ko ek saath kaam karne mein madad karta hai.

## 1. ROS 2 Architecture and Core Concepts

*   **Middleware for Robotics:** ROS 2 ek flexible framework hai jo distributed robot applications banane ke liye istemal hota hai. Yeh components ke darmiyan communication ko manage karta hai.
*   **Decentralized Design:** ROS 1 ke centralized master ke bar-aks, ROS 2 ka design decentralized hai. Iska matlab hai ke communication nodes ke darmiyan direct hota hai, jo robustness aur scalability ko barhata hai.
*   **DDS (Data Distribution Service):** ROS 2 communication ke liye DDS standard par rely karta hai. DDS real-time, high-performance aur reliable data exchange provide karta hai.
*   **Workspaces (Colcon):** ROS 2 projects ko organize aur build karne ke liye `colcon` build tool use hota hai. `colcon` workspaces ke andar multiple packages ko manage karta hai.

## 2. Nodes, Topics, Services, and Actions

ROS 2 mein communication ke mukhtalif tareeqe hain:

*   **Nodes:** ROS 2 mein nodes executable processes hote hain. Har node ek specific functionality perform karta hai, jaise sensor data read karna, motor control karna ya navigation algorithm chalana. Robot ke mukhtalif hisson ko alag alag nodes mein divide kiya jata hai.
    *   **Example:** Ek node camera se images read kar raha hai, dusra node un images ko process kar raha hai.
*   **Topics:** Topics asynchronous, publish/subscribe communication ke liye hote hain. Ek node data (messages) ko ek topic par publish karta hai, aur doosre nodes jo us topic ko subscribe kiye hue hote hain, woh data receive karte hain.
    *   **Example:** `/camera/image_raw` topic par camera node images publish karta hai, aur image processing node use subscribe karta hai.
*   **Services:** Services synchronous (request/reply) communication ke liye hote hain. Jab ek node ko kisi doosre node se ek specific task perform karwana ho aur uske response ka intezar karna ho, tab services use hote hain.
    *   **Example:** Ek client node `get_robot_status` service ko call karta hai, aur server node robot ka current status return karta hai.
*   **Actions:** Actions long-running, goal-oriented tasks ke liye use hote hain. Ye services se zyada complex hote hain aur client ko task ki progress (feedback), final result (result) aur task ko cancel karne ki salahiyat (cancellation) provide karte hain.
    *   **Example:** `move_to_goal` action. Client goal send karta hai, server robot ko goal ki taraf move karta hai aur beech beech mein feedback (current position) deta rehta hai. Goal tak pahunchne par result deta hai.

## 3. Building ROS 2 Packages with Python

*   **rclpy:** ROS Client Library for Python (rclpy) Python mein ROS 2 applications banane ke liye official client library hai.
*   **Package Structure:** Har ROS 2 package mein `setup.py`, `package.xml`, aur source files (Python scripts) hote hain.
*   **Writing a Simple Publisher/Subscriber:**
    *   **Publisher:** Ek Python script jo ek specific topic par messages publish karta hai.
    *   **Subscriber:** Ek Python script jo us topic ko subscribe karta hai aur messages receive karta hai.
*   **Python Agents to ROS Controllers:** Python mein likhe gaye intelligent agents (jaise LLM-based planners) ko `rclpy` use karke ROS 2 ecosystem se integrate kiya ja sakta hai, taake woh robot controllers ko commands de sakein.

## 4. Launch Files and Parameter Management

*   **Launch Files (`.launch.py`):** Complex robot systems mein kayi nodes, parameters aur configurations hoti hain. Launch files in sab ko ek saath define aur launch karne ka tareeqa provide karte hain. Python mein likhe jaate hain.
    *   **Nodes launch karna:** Ek hi launch file se multiple nodes ko start karna.
    *   **Parameters load karna:** Nodes ke liye runtime parameters (jaise sensor calibration values, PID gains) ko load karna.
    *   **Groups aur Namespaces:** Nodes ko organize karna.
*   **Parameters:** ROS 2 nodes ko dynamic configuration values provide karne ke liye parameters use hote hain. Parameters ko YAML files mein define kiya ja sakta hai aur launch files ke zariye nodes mein load kiya ja sakta hai.
    *   **Dynamic Parameters:** Kuch parameters ko runtime par bhi modify kiya ja sakta hai `ros2 param set` command se.

Is module ke end tak, aap ROS 2 ke buniyadi concepts ko samajh chuke honge aur Python mein simple ROS 2 applications banane ke qabil ho jayenge.
