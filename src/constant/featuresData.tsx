import { Cpu, Lock, Network, Zap } from 'lucide-react';

export const FEATURES_COLOR = [
    'purple',
    'green',
    'royalblue',
    'orangered',
]

export const FEATURES_DATA = [
    {
        title: "Autonomous Orchestration",
        desc: "Deploy self-learning AI agents that manage complex workflows across your enterprise. From automated decision-making to predictive system maintenance with 99.9% precision.",
        icon: <Cpu style={{ color: FEATURES_COLOR[0] }} className="w-8 h-8 " />,
    },
    {
        title: "Decentralized Trust",
        desc: "Integrate blockchain-backed security layers to ensure absolute data integrity. Our immutable protocols eliminate single points of failure, protecting your most critical technical assets.",
        icon: <Lock style={{ color: FEATURES_COLOR[1] }} className="w-8 h-8 " />,
    },
    {
        title: "IoT Edge Intelligence",
        desc: "Process data at the source with ultra-low latency. Our IoT mesh frameworks connect hardware nodes with AI logic, enabling real-time response in industrial and smart environments.",
        icon: <Network style={{ color: FEATURES_COLOR[2] }} className="w-8 h-8" />,
    },
    {
        title: "Cognitive Data Analytics",
        desc: "Transform raw data into strategic intelligence. Advanced neural networks analyze multidimensional datasets to uncover hidden patterns and drive exponential business growth.",
        icon: <Zap style={{ color: FEATURES_COLOR[3] }} className="w-8 h-8" />,
    },
];