import React, { useState, useMemo } from 'react';
import { 
  Briefcase, 
  ExternalLink, 
  FolderGit2, 
  Github, 
  Search, 
  Sparkles, 
  ArrowUpRight, 
  Filter, 
  GraduationCap 
} from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'capstone', label: 'Skripsi & Capstone' },
    { id: 'internship', label: 'Magang Industri' },
    { id: 'college', label: 'Kuliah Semester' },
    { id: 'personal', label: 'Mandiri & Kompetisi' },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (p.courseName && p.courseName.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCategory && matchSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="proyek" className="py-20 bg-slate-50/50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Daftar Proyek Terpilih</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Karya Rekayasa Selama Kuliah & Magang
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Portofolio aplikasi nyata yang mendemonstrasikan perancangan arsitektur, pemecahan masalah, dan penguasaan stack teknologi modern.
            </p>
          </div>

          <div className="text-xs text-slate-500 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs self-start md:self-auto">
            Menampilkan <span className="font-bold text-slate-900">{filteredProjects.length}</span> dari {projects.length} proyek
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-2xs w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari proyek, stack, atau topik..."
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
            <FolderGit2 className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">Tidak ada proyek yang sesuai filter</h3>
            <p className="text-xs text-slate-500 mt-1">Coba sesuaikan kata kunci pencarian atau pilih kategori proyek lain.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    
                    {/* Badge Category */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold tracking-tight shadow-xs">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Timeline pill */}
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-md text-slate-700 text-[10px] font-medium shadow-2xs">
                        {project.period}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Academic course context badge */}
                    {project.courseName && (
                      <div className="mt-3 text-[11px] font-medium text-slate-500 flex items-center gap-1">
                        <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                        <span className="truncate">{project.courseName}</span>
                      </div>
                    )}

                    {/* Key Metrics Chips */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100">
                        {project.metrics.slice(0, 2).map((m, mIdx) => (
                          <div key={mIdx} className="bg-slate-50 p-2 rounded-lg text-center">
                            <div className="text-xs font-bold text-slate-900">{m.value}</div>
                            <div className="text-[10px] text-slate-500 truncate">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-400 text-[10px] font-medium">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 pt-0 border-t border-slate-100/80 flex items-center justify-between gap-2 mt-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors py-2"
                  >
                    <span>Detail Lengkap</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors"
                        title="Lihat GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-indigo-600 transition-colors"
                        title="Kunjungi Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
