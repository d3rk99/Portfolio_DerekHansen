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
    title: 'Say Something',
    category: 'Narrative',
    media: {
      type: 'video',
      src: 'assets/Videos/say-something-student-music-video-derek-hansen-2160-ytshorts.savetube.me.mp4',
      poster: 'assets/images/project-narrative.svg'
    },
    image: 'assets/images/project-narrative.svg',
    description:
      'A narrative-driven student project, this cinematic interpretation of “Say Something” explores a dystopian tone shaped by guilt, memory, and emotional distance. The story unfolds through visual language rather than dialogue, relying on composition, movement, and timing to carry the narrative without heavy exposition. I led production as a solo producer from concept through final edit, including directing, cinematography, and post-production, while coordinating with professional actors and maintaining a clear creative vision. Though heavily planned in pre-production, execution followed a guerrilla-style approach that used natural light, time of day, and weather conditions to preserve visual consistency and tone. The result balances intentional design with on-the-fly problem solving, demonstrating creative direction and technical adaptability in a constrained production environment.',
    roles: 'Solo Producer, Director, Cinematographer, Post-Production',
    link: 'https://example.com/narrative-project'
  },

  {
    title: 'Idaho State University Public Safety',
    category: 'Educational',
    media: {
      type: 'video',
      src: 'assets/Videos/Need Help? Just ask.mp4',
      poster: 'assets/images/project-educational.svg'
    },
    image: 'assets/images/project-educational.svg',
    description:
      'This project was produced as contracted work for the Idaho State University Public Safety Department. The department wanted an updated orientation video for new students because their previous version felt dated and lacked quality. After I reached out and met with their team, I moved into full production. Without personal camera equipment, I coordinated gear through the university\'s communications department and built the production around available resources. The process was extremely rewarding and included challenges in interview organization, narrative structure, and subtle CGI integration. The final piece was very well received by the department, and they later offered me an in-house role as production and content creation manager, which I ultimately declined.',
    roles: 'Writer, Producer, Director, Editor',
    link: ''
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
