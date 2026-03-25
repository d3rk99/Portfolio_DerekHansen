// Edit this array to add, remove, or update portfolio projects.
// Each object maps directly to one card in the Portfolio section.
//
// Media options:
// 1) YouTube embed:
//    media: { type: 'youtube', url: 'https://www.youtube.com/watch?v=VIDEO_ID' }
// 2) Self-hosted video:
//    media: { type: 'video', src: 'assets/videos/your-video.mp4', poster: 'assets/images/your-poster.jpg' }
// 3) Static image fallback (default):
//    image: 'assets/images/project-image.svg'
window.portfolioItems = [
  {
    title: 'Fractured Light',
    category: 'Narrative',
    media: {
      type: 'youtube',
      url: 'https://www.youtube-nocookie.com/embed/qrTbU_Yn6QM?si=kElQLsTNaHIIjj7x'
    },
    image: 'assets/images/project-narrative.svg',
    description: 'A short narrative piece exploring memory and place through natural light and minimal dialogue.',
    roles: 'Director, Editor',
    link: 'https://example.com/narrative-project'
  },
  {
    title: 'Northline Brand Story',
    category: 'Corporate',
    image: 'assets/images/project-corporate.svg',
    description: 'A polished brand-focused video highlighting team culture, customer stories, and product vision.',
    roles: 'Cinematographer, Post-Production',
    link: 'https://example.com/corporate-project'
  },
  {
    title: 'Realtime SetViz Demo',
    category: 'Tech Preview',
    media: {
      type: 'video',
      src: 'assets/videos/realtime-setviz-demo.mp4',
      poster: 'assets/images/project-tech.svg'
    },
    image: 'assets/images/project-tech.svg',
    description: 'Preview content demonstrating an experimental virtual-production workflow for previsualization.',
    roles: 'Editor, Motion Graphics',
    link: ''
  },
  {
    title: 'STEM Lab Learning Series',
    category: 'Educational',
    image: 'assets/images/project-educational.svg',
    description: 'Episode-based educational media designed to simplify technical topics for student audiences.',
    roles: 'Producer, Script Support',
    link: 'https://example.com/educational-project'
  },
  {
    title: 'Community Voices Documentary',
    category: 'Collaborative',
    image: 'assets/images/project-collab.svg',
    description: 'A team-produced documentary short focused on local stories and grassroots creative initiatives.',
    roles: 'Assistant Director, Editor',
    link: 'https://example.com/collaborative-project'
  },
  {
    title: 'Campus Event Highlight Reel',
    category: 'Collaborative',
    image: 'assets/images/project-collab-2.svg',
    description: 'Fast-turn social and event recap content produced with a student media crew.',
    roles: 'Camera Operator, Editor',
    link: ''
  }
];
