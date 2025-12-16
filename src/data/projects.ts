export interface ProjectData {
  slug: string;
  title: string;
  company: string;
  role: string;
  duration: string;
  color: string;
  heroImage?: string;
  summary: string;
  problem: {
    title: string;
    description: string;
    challenges: string[];
  };
  solution: {
    title: string;
    description: string;
    approach: string[];
  };
  architecture: {
    title: string;
    description: string;
    components: {
      name: string;
      description: string;
    }[];
    diagram?: string;
  };
  implementation: {
    title: string;
    highlights: {
      title: string;
      description: string;
      code?: string;
    }[];
  };
  results: {
    title: string;
    metrics: {
      value: string;
      label: string;
      description: string;
    }[];
  };
  techStack: {
    category: string;
    technologies: string[];
  }[];
  lessons: {
    title: string;
    points: string[];
  };
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const projects: ProjectData[] = [
  {
    slug: "voice-calling-agents",
    title: "Voice Calling Agents",
    company: "Phi Consulting / Data-Grid.ai",
    role: "Founding Engineer",
    duration: "May 2025 – Present",
    color: "#3b82f6",
    summary: "Built autonomous voice AI agents that handle 1,000+ calls daily for US logistics companies, automating lead qualification and appointment booking with sub-500ms response latency.",
    problem: {
      title: "The Challenge",
      description: "US logistics companies were drowning in manual phone operations. Sales teams spent 70% of their time on repetitive calls—qualifying leads, booking appointments, and following up. The human bottleneck was costing companies millions in missed opportunities and operational inefficiency.",
      challenges: [
        "High volume of repetitive calls consuming valuable sales team time",
        "Inconsistent lead qualification leading to poor conversion rates",
        "24/7 availability requirements impossible to meet with human agents",
        "Language barriers and accent variations in a diverse customer base",
        "Need for real-time CRM integration and appointment scheduling"
      ]
    },
    solution: {
      title: "The Solution",
      description: "I architected and built a fully autonomous voice AI system that handles the entire call lifecycle—from initial contact to appointment confirmation. The system uses a novel multi-agent architecture where specialized agents handle different conversation phases, ensuring natural dialogue flow and high task completion rates.",
      approach: [
        "Designed a multi-agent orchestration layer using LangGraph for complex conversation state management",
        "Implemented real-time speech-to-text with Deepgram's Nova-2 model for 98%+ transcription accuracy",
        "Built custom voice synthesis pipeline with ElevenLabs for natural, brand-consistent voice output",
        "Created dynamic prompt engineering system that adapts to conversation context in real-time",
        "Integrated with existing CRM systems via FastAPI webhooks for seamless data synchronization"
      ]
    },
    architecture: {
      title: "System Architecture",
      description: "The system follows a microservices architecture with event-driven communication. Each component is designed for horizontal scalability and fault tolerance.",
      components: [
        {
          name: "Voice Gateway",
          description: "Handles telephony integration via Twilio, managing call lifecycle events and audio streaming with WebSocket connections for real-time bidirectional audio."
        },
        {
          name: "Speech Processing Pipeline",
          description: "Deepgram Nova-2 for STT with custom vocabulary boosting for logistics terminology. ElevenLabs for TTS with voice cloning for brand consistency."
        },
        {
          name: "Conversation Engine",
          description: "LangGraph-based state machine managing conversation flow. Supports interruption handling, context switching, and graceful error recovery."
        },
        {
          name: "Agent Orchestrator",
          description: "Coordinates between specialized agents: Qualifier Agent, Scheduler Agent, and Objection Handler. Uses GPT-4 for complex reasoning."
        },
        {
          name: "Integration Layer",
          description: "FastAPI services connecting to CRM (Salesforce, HubSpot), calendar systems (Google Calendar, Calendly), and internal databases."
        }
      ]
    },
    implementation: {
      title: "Key Implementation Details",
      highlights: [
        {
          title: "Ultra-Low Latency Pipeline",
          description: "Achieving sub-500ms response time required aggressive optimization. I implemented streaming STT with partial transcript processing, allowing the LLM to begin generating responses before the user finishes speaking. Combined with chunked TTS streaming, this creates natural conversational flow.",
        },
        {
          title: "Interruption Handling",
          description: "Real conversations involve interruptions. I built a voice activity detection (VAD) system that monitors for user speech during agent responses, immediately halting TTS output and processing the interruption. This required careful audio buffer management and state reconciliation.",
        },
        {
          title: "Dynamic Context Management",
          description: "Each call maintains a rich context window including caller history, previous interactions, and real-time sentiment analysis. The context is pruned and summarized using a sliding window approach to stay within token limits while preserving critical information.",
        },
        {
          title: "Graceful Degradation",
          description: "When STT confidence drops below threshold or network issues occur, the system gracefully requests clarification or offers to transfer to a human agent. This maintains user trust and ensures no lead is lost due to technical issues.",
        }
      ]
    },
    results: {
      title: "Impact & Results",
      metrics: [
        {
          value: "1,000+",
          label: "Daily Calls Handled",
          description: "Autonomous calls processed without human intervention"
        },
        {
          value: "<500ms",
          label: "Response Latency",
          description: "End-to-end latency from user speech to agent response"
        },
        {
          value: "15+",
          label: "Companies Served",
          description: "US logistics companies using the platform"
        },
        {
          value: "73%",
          label: "Cost Reduction",
          description: "Reduction in customer acquisition costs"
        }
      ]
    },
    techStack: [
      {
        category: "AI/ML",
        technologies: ["LangChain", "LangGraph", "GPT-4", "Deepgram Nova-2", "ElevenLabs"]
      },
      {
        category: "Backend",
        technologies: ["Python", "FastAPI", "WebSockets", "Redis", "PostgreSQL"]
      },
      {
        category: "Telephony",
        technologies: ["Twilio", "Pipecat", "WebRTC"]
      },
      {
        category: "Infrastructure",
        technologies: ["AWS", "Docker", "Kubernetes", "CloudWatch"]
      }
    ],
    lessons: {
      title: "Key Learnings",
      points: [
        "Latency is everything in voice AI—users perceive delays over 600ms as unnatural",
        "Edge cases in conversation (interruptions, background noise, accents) require dedicated handling",
        "Real-time systems need comprehensive observability from day one",
        "Voice AI requires different prompt engineering than text-based systems—brevity and clarity are paramount"
      ]
    },
    metadata: {
      title: "Voice AI Calling Agents - Naveed Mazhar",
      description: "How I built autonomous voice AI agents handling 1,000+ daily calls for US logistics companies with sub-500ms latency using LangGraph, Deepgram, and ElevenLabs.",
      keywords: ["Voice AI", "LangGraph", "Deepgram", "ElevenLabs", "Conversational AI", "Voice Agents", "Twilio", "FastAPI", "Real-time AI"]
    }
  },
  {
    slug: "traffic-monitoring-system",
    title: "Traffic Monitoring System",
    company: "Kodifly, Hong Kong",
    role: "AI Engineer",
    duration: "May 2023 – Apr 2024",
    color: "#22c55e",
    summary: "Developed an end-to-end computer vision pipeline for Hong Kong tunnel traffic monitoring, processing 100+ camera feeds in real-time with 95%+ detection accuracy using 2D/3D LiDAR fusion.",
    problem: {
      title: "The Challenge",
      description: "Hong Kong's tunnel infrastructure handles millions of vehicles daily. Traditional monitoring relied on human operators watching dozens of camera feeds—an approach prone to fatigue, inconsistency, and delayed incident response. The client needed an automated system that could detect vehicles, classify them, track their movement, and identify incidents in real-time.",
      challenges: [
        "Processing 100+ simultaneous camera feeds with minimal latency",
        "Varying lighting conditions inside tunnels (bright entrances, dark interiors, flickering lights)",
        "Occlusion from large vehicles blocking smaller ones",
        "Accurate vehicle classification (cars, trucks, motorcycles, emergency vehicles)",
        "Real-time incident detection (stopped vehicles, wrong-way drivers, debris)"
      ]
    },
    solution: {
      title: "The Solution",
      description: "I designed a multi-modal perception system that fuses 2D camera imagery with 3D LiDAR point clouds for robust vehicle detection and tracking. The system processes all feeds in real-time, maintaining a unified world model of tunnel traffic that enables sophisticated incident detection and traffic analytics.",
      approach: [
        "Built custom detection pipeline using PaddlePaddle's PP-YOLOE for 2D detection with domain-specific training",
        "Implemented 3D LiDAR processing using PointPillars architecture for depth-accurate vehicle localization",
        "Developed sensor fusion algorithm combining 2D detections with 3D point clouds using calibrated projection",
        "Created multi-object tracking system using DeepSORT with custom re-identification features for tunnel environments",
        "Deployed on edge devices with TensorRT optimization for real-time performance"
      ]
    },
    architecture: {
      title: "System Architecture",
      description: "The architecture follows a distributed edge-cloud pattern. Edge devices handle real-time inference while the cloud aggregates data for analytics and long-term storage.",
      components: [
        {
          name: "Edge Processing Units",
          description: "NVIDIA Jetson AGX Xavier devices deployed at each tunnel section. Each unit processes 8-12 camera feeds and 2-4 LiDAR sensors with on-device inference."
        },
        {
          name: "2D Detection Module",
          description: "PP-YOLOE model fine-tuned on 50,000+ tunnel-specific images. Handles vehicle detection, classification, and attribute recognition (color, size, type)."
        },
        {
          name: "3D Perception Module",
          description: "PointPillars-based LiDAR processing for accurate 3D bounding boxes. Provides ground-truth depth information for fusion."
        },
        {
          name: "Fusion Engine",
          description: "Proprietary algorithm that projects 3D LiDAR detections into 2D camera space using extrinsic calibration. Resolves conflicts and improves detection confidence."
        },
        {
          name: "Tracking & Analytics",
          description: "Multi-object tracker maintaining vehicle identities across camera handoffs. Feeds into traffic flow analytics and incident detection system."
        }
      ]
    },
    implementation: {
      title: "Key Implementation Details",
      highlights: [
        {
          title: "Handling Extreme Lighting Variations",
          description: "Tunnel environments present unique lighting challenges—from bright daylight at entrances to near-darkness inside. I implemented adaptive histogram equalization preprocessing and trained the model with aggressive augmentation including synthetic lighting variations. This improved detection accuracy in low-light conditions by 23%."
        },
        {
          title: "Sensor Calibration Pipeline",
          description: "Accurate fusion requires precise calibration between cameras and LiDAR sensors. I built an automated calibration pipeline using checkerboard patterns and developed a continuous calibration monitoring system that detects drift and triggers recalibration alerts."
        },
        {
          title: "Real-Time Multi-Camera Tracking",
          description: "Vehicles must be tracked consistently as they move through the tunnel, appearing in multiple cameras. I designed a hierarchical tracking system: local trackers per camera, and a global tracker that maintains identity across camera handoffs using learned appearance embeddings."
        },
        {
          title: "Edge Deployment Optimization",
          description: "To achieve 30-60 FPS on Jetson devices, I implemented INT8 quantization with calibration, layer fusion, and dynamic batching. Custom CUDA kernels for preprocessing further reduced latency by eliminating CPU-GPU transfers."
        }
      ]
    },
    results: {
      title: "Impact & Results",
      metrics: [
        {
          value: "95%+",
          label: "Detection Accuracy (mAP)",
          description: "Vehicle detection accuracy across all conditions"
        },
        {
          value: "100+",
          label: "Camera Feeds",
          description: "Simultaneous feeds processed in real-time"
        },
        {
          value: "30-60",
          label: "FPS",
          description: "Processing speed on edge devices"
        },
        {
          value: "< 100ms",
          label: "Detection Latency",
          description: "End-to-end latency from capture to detection"
        }
      ]
    },
    techStack: [
      {
        category: "Deep Learning",
        technologies: ["PaddlePaddle", "PyTorch", "PP-YOLOE", "PointPillars", "DeepSORT"]
      },
      {
        category: "Computer Vision",
        technologies: ["OpenCV", "Open3D", "CUDA", "TensorRT"]
      },
      {
        category: "Edge Computing",
        technologies: ["NVIDIA Jetson AGX Xavier", "ROS2", "Docker"]
      },
      {
        category: "Backend",
        technologies: ["Python", "C++", "Redis", "PostgreSQL", "Kafka"]
      }
    ],
    lessons: {
      title: "Key Learnings",
      points: [
        "Multi-modal fusion is only as good as your calibration—invest heavily in robust calibration pipelines",
        "Edge deployment constraints force creative optimization that often improves overall system design",
        "Domain-specific training data is more valuable than larger generic datasets",
        "Real-time systems need extensive stress testing under degraded conditions"
      ]
    },
    metadata: {
      title: "Traffic Monitoring System with LiDAR Fusion - Naveed Mazhar",
      description: "Building a real-time traffic monitoring system processing 100+ camera feeds with 95%+ accuracy using 2D/3D LiDAR fusion, PaddlePaddle, and edge deployment.",
      keywords: ["Computer Vision", "LiDAR Fusion", "Traffic Monitoring", "PaddlePaddle", "Edge AI", "TensorRT", "Real-time Detection", "Multi-object Tracking"]
    }
  },
  {
    slug: "ai-dogfight-simulation",
    title: "AI Dogfight Simulation",
    company: "Turkish Aerospace Industries",
    role: "AI Engineer",
    duration: "Apr 2024 – May 2025",
    color: "#f59e0b",
    summary: "Led development of deep reinforcement learning systems for autonomous flight combat simulations, achieving 85%+ win rate against human pilots in dogfight scenarios.",
    problem: {
      title: "The Challenge",
      description: "Training fighter pilots is extraordinarily expensive and risky. Simulation-based training helps, but current AI opponents follow predictable patterns that experienced pilots quickly learn to exploit. The defense industry needed AI adversaries that could adapt, learn, and challenge human pilots in realistic combat scenarios.",
      challenges: [
        "Creating AI that exhibits unpredictable, human-like tactical behavior",
        "Handling the high-dimensional continuous action space of aircraft control",
        "Ensuring real-time decision making at 60+ Hz control frequency",
        "Developing AI that can generalize across different aircraft and scenarios",
        "Balancing between aggressive tactics and survivability"
      ]
    },
    solution: {
      title: "The Solution",
      description: "I led a team of 5 engineers to develop a multi-agent deep reinforcement learning system using hierarchical policies. The high-level tactical agent makes strategic decisions (engage, evade, pursue), while low-level controllers handle aircraft maneuvering. This separation allowed for both sophisticated tactics and precise control.",
      approach: [
        "Implemented Soft Actor-Critic (SAC) algorithm for continuous control with entropy regularization",
        "Designed hierarchical policy architecture separating tactical decisions from flight control",
        "Built custom simulation environment with realistic flight dynamics and weapon systems",
        "Developed curriculum learning pipeline progressing from basic maneuvers to full combat",
        "Created self-play training regime for continuous improvement against evolving opponents"
      ]
    },
    architecture: {
      title: "System Architecture",
      description: "The system uses a hierarchical multi-agent architecture with centralized training and decentralized execution, enabling complex tactical behavior while maintaining real-time performance.",
      components: [
        {
          name: "Tactical Decision Network",
          description: "Transformer-based policy network processing situational awareness data. Outputs high-level tactical primitives (attack, defend, disengage) with associated parameters."
        },
        {
          name: "Maneuver Controller",
          description: "MLP-based low-level controller translating tactical commands into aircraft control inputs (pitch, roll, yaw, throttle). Trained via imitation learning on expert trajectories."
        },
        {
          name: "Situational Awareness Module",
          description: "Processes sensor data (radar, RWR, visual) into a unified state representation. Handles uncertainty and sensor limitations realistically."
        },
        {
          name: "Opponent Modeling",
          description: "Online learning component that builds models of opponent behavior during engagement. Enables adaptive counter-tactics."
        },
        {
          name: "Training Infrastructure",
          description: "Distributed training across 64 GPU workers with synchronized parameter updates. Custom simulation parallelization for high throughput."
        }
      ]
    },
    implementation: {
      title: "Key Implementation Details",
      highlights: [
        {
          title: "Hierarchical Policy Design",
          description: "The two-level hierarchy was crucial for success. The tactical network operates at 2Hz, making strategic decisions based on the big picture. The maneuver controller runs at 60Hz, executing precise aircraft control. This separation mirrors how human pilots think—strategy at one level, reflexive flying at another."
        },
        {
          title: "Curriculum Learning for Combat",
          description: "Training an agent from scratch on full combat is impractical—the reward signal is too sparse. I designed a curriculum starting with basic flight (maintain altitude, heading), progressing to pursuit (track target), then to weapons employment (valid firing solutions), and finally full engagement. Each stage bootstrapped from the previous."
        },
        {
          title: "Self-Play with Diversity",
          description: "Pure self-play tends to converge to narrow strategies. I introduced population-based training where multiple agent variants train simultaneously, maintaining strategic diversity. A league system ensured agents couldn't over-specialize against specific opponents."
        },
        {
          title: "Real-Time Inference Optimization",
          description: "Combat requires split-second decisions. I optimized the inference pipeline using ONNX Runtime with TensorRT backend, achieving sub-5ms inference latency. Careful attention to memory allocation eliminated garbage collection pauses during combat."
        }
      ]
    },
    results: {
      title: "Impact & Results",
      metrics: [
        {
          value: "85%+",
          label: "Win Rate vs Humans",
          description: "Against experienced simulation pilots"
        },
        {
          value: "5+",
          label: "Engineers Led",
          description: "Team size under my technical leadership"
        },
        {
          value: "60Hz",
          label: "Control Frequency",
          description: "Real-time decision making rate"
        },
        {
          value: "<5ms",
          label: "Inference Latency",
          description: "Policy network inference time"
        }
      ]
    },
    techStack: [
      {
        category: "Reinforcement Learning",
        technologies: ["PyTorch", "Stable-Baselines3", "SAC", "PPO", "Self-Play"]
      },
      {
        category: "Simulation",
        technologies: ["JSBSim", "Custom Physics Engine", "OpenGL"]
      },
      {
        category: "Optimization",
        technologies: ["ONNX Runtime", "TensorRT", "CUDA", "Ray/RLlib"]
      },
      {
        category: "Infrastructure",
        technologies: ["Kubernetes", "MLflow", "Weights & Biases", "NVIDIA DGX"]
      }
    ],
    lessons: {
      title: "Key Learnings",
      points: [
        "Hierarchical policies are essential for complex control problems with multiple time scales",
        "Curriculum learning transforms impossible problems into tractable ones",
        "Self-play requires careful diversity maintenance to avoid strategy collapse",
        "Defense applications demand rigorous testing—AI must fail gracefully when uncertain"
      ]
    },
    metadata: {
      title: "AI Dogfight Simulation with Deep RL - Naveed Mazhar",
      description: "Leading development of deep reinforcement learning systems for autonomous combat simulation, achieving 85%+ win rate against human pilots using hierarchical policies and self-play.",
      keywords: ["Deep Reinforcement Learning", "Autonomous Systems", "Combat Simulation", "PyTorch", "Self-Play", "Multi-Agent RL", "Aerospace AI"]
    }
  },
  {
    slug: "edge-ai-deployment",
    title: "Edge AI Deployment",
    company: "OMNOAI / ADLYTICAI",
    role: "Senior CV Engineer",
    duration: "Dec 2021 – Feb 2023",
    color: "#ef4444",
    summary: "Architected and deployed hardware-optimized AI pipelines across 200+ NVIDIA Jetson devices, achieving 40+ FPS real-time inference for 15+ commercial products.",
    problem: {
      title: "The Challenge",
      description: "The company had powerful AI models that worked great in the cloud but were too slow and expensive to deploy at scale. Customers needed real-time inference at the edge—in retail stores, warehouses, and public spaces—without cloud connectivity dependencies. The challenge was making sophisticated AI run on constrained edge hardware while maintaining accuracy.",
      challenges: [
        "Models optimized for cloud GPUs were 10x too slow for edge devices",
        "Memory constraints on Jetson devices (4-8GB) vs training machines (32GB+)",
        "Need for consistent performance across varying environmental conditions",
        "Deploying and managing updates across 200+ distributed devices",
        "Power consumption limits in some deployment scenarios"
      ]
    },
    solution: {
      title: "The Solution",
      description: "I developed a comprehensive edge optimization pipeline that transforms cloud-trained models into edge-ready deployments. The pipeline includes automated quantization, architecture optimization, and TensorRT compilation. I also built a device management platform for OTA updates and monitoring.",
      approach: [
        "Built automated INT8 quantization pipeline with calibration dataset curation",
        "Implemented model architecture optimization including layer fusion and channel pruning",
        "Developed TensorRT-native inference engine with custom plugins for unsupported operations",
        "Created dynamic batching system that balances latency and throughput based on load",
        "Built Docker-based deployment system with OTA update capabilities"
      ]
    },
    architecture: {
      title: "System Architecture",
      description: "The architecture separates model optimization (done once in cloud) from deployment (repeated across devices), enabling rapid iteration while maintaining consistency.",
      components: [
        {
          name: "Model Optimization Pipeline",
          description: "Cloud-based pipeline that takes a trained model and produces optimized artifacts. Includes ONNX export, quantization, TensorRT compilation, and validation."
        },
        {
          name: "Edge Inference Engine",
          description: "C++ inference runtime built on TensorRT with custom memory management. Handles multi-model orchestration and resource sharing."
        },
        {
          name: "Preprocessing Accelerator",
          description: "CUDA-accelerated preprocessing (resize, normalize, color conversion) eliminating CPU bottlenecks. Uses unified memory for zero-copy transfers."
        },
        {
          name: "Device Management Platform",
          description: "Central platform for device health monitoring, model deployment, and configuration management. Supports staged rollouts and automatic rollback."
        },
        {
          name: "Telemetry System",
          description: "Lightweight telemetry collecting inference metrics, hardware stats, and anomaly flags. Enables proactive maintenance and optimization."
        }
      ]
    },
    implementation: {
      title: "Key Implementation Details",
      highlights: [
        {
          title: "INT8 Quantization Without Accuracy Loss",
          description: "Naive INT8 quantization often degrades accuracy. I developed a calibration dataset curation process that selects representative samples covering the full data distribution. Combined with per-tensor quantization for sensitive layers, we maintained 99%+ of original accuracy while achieving 3-4x speedup."
        },
        {
          title: "Custom TensorRT Plugins",
          description: "Some model operations weren't natively supported by TensorRT. I wrote custom CUDA plugins for operations like deformable convolutions and custom attention mechanisms, enabling end-to-end TensorRT execution without CPU fallbacks."
        },
        {
          title: "Memory-Efficient Multi-Model Serving",
          description: "Many products require multiple models (detection + classification + tracking). I implemented a shared memory pool across models and dynamic model loading/unloading based on usage patterns. This enabled running 3-4 models on devices that couldn't fit them all simultaneously."
        },
        {
          title: "Thermal-Aware Inference",
          description: "Sustained high load causes thermal throttling on edge devices. I built a thermal management system that monitors device temperature and adjusts inference frequency and batch size to maintain consistent performance while preventing overheating."
        }
      ]
    },
    results: {
      title: "Impact & Results",
      metrics: [
        {
          value: "40+",
          label: "FPS",
          description: "Real-time inference speed on Jetson devices"
        },
        {
          value: "200+",
          label: "Devices Deployed",
          description: "Edge devices running in production"
        },
        {
          value: "15+",
          label: "Products Shipped",
          description: "Commercial products using the pipeline"
        },
        {
          value: "8x",
          label: "Speedup",
          description: "Performance improvement from optimization"
        }
      ]
    },
    techStack: [
      {
        category: "Optimization",
        technologies: ["TensorRT", "CUDA", "cuDNN", "ONNX", "INT8 Quantization"]
      },
      {
        category: "Edge Devices",
        technologies: ["NVIDIA Jetson (Nano, TX2, Xavier, Orin)", "DeepStream"]
      },
      {
        category: "Development",
        technologies: ["C++", "Python", "CMake", "Docker"]
      },
      {
        category: "Infrastructure",
        technologies: ["Balena", "AWS IoT", "Prometheus", "Grafana"]
      }
    ],
    lessons: {
      title: "Key Learnings",
      points: [
        "Edge optimization should be considered from model design, not as an afterthought",
        "Quantization-aware training produces much better results than post-training quantization",
        "Device management at scale requires treating deployments like software releases—staged rollouts, rollback capability",
        "Thermal and power management are as important as raw performance for edge devices"
      ]
    },
    metadata: {
      title: "Edge AI Deployment at Scale - Naveed Mazhar",
      description: "How I deployed AI across 200+ NVIDIA Jetson devices with TensorRT optimization achieving 40+ FPS for 15+ commercial products. Deep dive into edge AI optimization.",
      keywords: ["Edge AI", "TensorRT", "NVIDIA Jetson", "Model Optimization", "INT8 Quantization", "CUDA", "Embedded AI", "IoT"]
    }
  },
  {
    slug: "3d-mesh-reconstruction",
    title: "3D Mesh Reconstruction",
    company: "Ideeza, Israel",
    role: "Lead ML Engineer",
    duration: "Dec 2020 – Dec 2021",
    color: "#8b5cf6",
    summary: "Developed a single-image to 3D mesh reconstruction system using CNN + Graph Neural Network architecture, achieving top-3 performance on the ShapeNet benchmark.",
    problem: {
      title: "The Challenge",
      description: "The client, a hardware design company, needed to accelerate their prototyping process. Designers would sketch concepts or take photos of existing products, but converting these to 3D models for manufacturing required skilled CAD engineers and days of work. They needed AI that could generate initial 3D meshes from single images.",
      challenges: [
        "Inferring 3D structure from a single 2D image (inherently ambiguous)",
        "Generating meshes with proper topology for manufacturing",
        "Handling diverse object categories with varying complexity",
        "Producing watertight meshes suitable for 3D printing",
        "Achieving sufficient detail for practical use"
      ]
    },
    solution: {
      title: "The Solution",
      description: "I developed a two-stage architecture: a CNN encoder extracts image features and predicts coarse 3D structure, then a Graph Convolutional Network refines the mesh topology and vertex positions. This approach leverages the CNN's strength in image understanding while using GCNs' ability to reason about mesh connectivity.",
      approach: [
        "Designed CNN backbone using ResNet-50 with feature pyramid for multi-scale feature extraction",
        "Implemented differentiable mesh representation enabling end-to-end training",
        "Built Graph Convolutional Network for iterative mesh refinement with edge-aware convolutions",
        "Developed custom loss functions combining Chamfer distance, edge length, and Laplacian smoothing",
        "Created data augmentation pipeline including synthetic rendering and photometric augmentation"
      ]
    },
    architecture: {
      title: "System Architecture",
      description: "The architecture follows an encode-decode pattern with iterative refinement. Each refinement step progressively improves mesh quality while maintaining topological validity.",
      components: [
        {
          name: "Image Encoder",
          description: "ResNet-50 backbone with Feature Pyramid Network. Extracts hierarchical features capturing both global shape and local details. Outputs multi-scale feature maps."
        },
        {
          name: "Coarse Shape Predictor",
          description: "Fully connected layers predicting initial mesh as deformed sphere or category-specific template. Establishes basic 3D structure from 2D observation."
        },
        {
          name: "Graph Neural Network Refiner",
          description: "3-stage GCN that iteratively refines vertex positions. Each stage uses image features via graph-image attention mechanism. Respects mesh topology during refinement."
        },
        {
          name: "Mesh Post-Processor",
          description: "Handles mesh cleanup: removes self-intersections, ensures watertightness, and applies Laplacian smoothing for manufacturing-ready output."
        },
        {
          name: "Training Pipeline",
          description: "Multi-GPU training with mixed precision. Custom dataloader for ShapeNet with on-the-fly rendering from random viewpoints."
        }
      ]
    },
    implementation: {
      title: "Key Implementation Details",
      highlights: [
        {
          title: "Differentiable Mesh Representation",
          description: "To enable end-to-end training, I implemented a differentiable mesh renderer and mesh-to-point-cloud sampler. This allowed computing losses in both 2D (rendered image comparison) and 3D (point cloud metrics) spaces, providing rich training signal."
        },
        {
          title: "Graph-Image Attention",
          description: "The key innovation was allowing each mesh vertex to attend to relevant image features. I implemented a cross-attention mechanism where vertex features query the image feature map, enabling the GCN to access detailed texture and edge information when refining vertex positions."
        },
        {
          title: "Topology-Aware Refinement",
          description: "Naive vertex movement can create self-intersections. I designed the GCN to predict vertex displacements constrained by neighboring vertex positions, with additional regularization losses penalizing invalid topologies. This produced clean, manufacturable meshes."
        },
        {
          title: "Multi-Category Training Strategy",
          description: "Training a single model across diverse ShapeNet categories (chairs, cars, planes) required careful handling. I implemented category-conditional normalization and category-weighted sampling to prevent dominant categories from overwhelming training."
        }
      ]
    },
    results: {
      title: "Impact & Results",
      metrics: [
        {
          value: "Top-3",
          label: "ShapeNet Benchmark",
          description: "Ranking on standard 3D reconstruction benchmark"
        },
        {
          value: "5-10x",
          label: "Design Speedup",
          description: "Acceleration in client's prototyping workflow"
        },
        {
          value: "0.42",
          label: "Chamfer Distance",
          description: "Reconstruction accuracy metric (lower is better)"
        },
        {
          value: "13",
          label: "Categories",
          description: "Object categories supported"
        }
      ]
    },
    techStack: [
      {
        category: "Deep Learning",
        technologies: ["PyTorch", "PyTorch3D", "PyTorch Geometric"]
      },
      {
        category: "3D Processing",
        technologies: ["Open3D", "Trimesh", "Blender (scripting)", "OpenGL"]
      },
      {
        category: "Training",
        technologies: ["Mixed Precision (AMP)", "Distributed Data Parallel", "Weights & Biases"]
      },
      {
        category: "Data",
        technologies: ["ShapeNet", "Pix3D", "Custom Synthetic Rendering"]
      }
    ],
    lessons: {
      title: "Key Learnings",
      points: [
        "Graph neural networks are powerful for geometric reasoning but require careful architecture design",
        "Differentiable rendering opens up powerful training signals—invest in good implementations",
        "3D reconstruction inherently involves ambiguity—embracing uncertainty (multiple plausible outputs) often works better than forcing single predictions",
        "Manufacturing constraints should be built into the model, not applied as post-processing"
      ]
    },
    metadata: {
      title: "Single-Image 3D Mesh Reconstruction - Naveed Mazhar",
      description: "Building a CNN + Graph Neural Network system for 3D mesh reconstruction from single images, achieving top-3 on ShapeNet benchmark. Deep dive into the architecture.",
      keywords: ["3D Reconstruction", "Graph Neural Networks", "PyTorch3D", "Computer Vision", "Deep Learning", "ShapeNet", "Mesh Generation", "GCN"]
    }
  }
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find(p => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(p => p.slug);
}
