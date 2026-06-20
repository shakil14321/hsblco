import { FileText, Download } from "lucide-react";

const papers = [
    { title: "The State of AI in 2026", date: "Jan 2026", size: "2.4 MB" },
    { title: "Future of Decentralized Finance", date: "Dec 2025", size: "1.8 MB" },
];

export const WhitePapers = () => (
    <section className="lg:px-6 text-white">
        <div className="philosophy-bg py-20  border border-slate-700 rounded-lg">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-20">
                    <span className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
                        Research & White Papers
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter max-w-3xl mx-auto leading-[1.1]">
                        Let&apos;s check our papers and <span className="text-secondary">what we research</span>.
                    </h2>
                </div>
                <div className="grid gap-4">
                    {papers.map((paper, idx) => (
                        <div key={idx} className="flex items-center justify-between p-6 border border-slate-700 rounded-lg hover:bg-secondary/25 transition-colors">
                            <div className="flex items-center gap-4">
                                <FileText className="text-secondary" />
                                <div>
                                    <h4 className="font-semibold">{paper.title}</h4>
                                    <p className="text-sm text-slate-400">{paper.date} • {paper.size}</p>
                                </div>
                            </div>
                            <button className="p-2 bg-secondary rounded-full hover:bg-secondary/80">
                                <Download size={18} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
    </div>
    </section>
);