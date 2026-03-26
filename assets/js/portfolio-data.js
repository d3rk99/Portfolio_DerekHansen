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
    roles: 'Writer, Producer, Director, Cinematographer, Editor',
    link: 'https://www.youtube.com/watch?v=qrTbU_Yn6QM'
  },

  {
    title: 'Idaho State University Public Safety',
    category: 'Corporate',
    media: {
      type: 'video',
      src: 'assets/Videos/need-help-just-ask-1080-ytshorts.savetube.me.mp4',
      poster: 'assets/images/project-educational.svg'
    },
    image: 'assets/images/project-educational.svg',
    description:
      'This project was produced as contracted work for the Idaho State University Public Safety Department. The department wanted an updated orientation video for new students because their previous version felt dated and lacked quality. After I reached out and met with their team, I moved into full production. Without personal camera equipment, I coordinated gear through the university\'s communications department and built the production around available resources. The process was extremely rewarding and included challenges in interview organization, narrative structure, and subtle CGI integration. The final piece was very well received by the department, and they later offered me an in-house role as production and content creation manager, which I ultimately declined.',
    roles: 'Writer, Producer, Director, Videographer, Editor',
    link: 'https://www.youtube.com/watch?v=8rfQEQvvLII&t=97s'
  },
  {
    title: 'Feed the Streets',
    category: 'Narrative',
	media: {
      type: 'video',
      src: 'assets/Videos/GDDRnRlcBA67SB0FAP-QPsOWqTgDbmdjAAAF.mp4',
      poster: 'assets/images/project-educational.svg'
    },
    image: 'assets/images/project-narrative.svg',
    description:
      'One of my favorite projects, this narrative piece started as the brainchild of a young student, Mathew Pryor. A lot of planning and organization went into the production, and I served as the main producer by securing locations and coordinating schedules for crew and talent. I also co-wrote the project alongside Matthew and supported sound and post-production. The experience reinforced how important a strong crew can be. Even with mostly non-professional collaborators, the project showed what is possible with the right mix of talent, trust, and delegation.',
    roles: 'Writer, Producer, Sound, Editor',
    link: ''
  },
  {
    title: '(Mock) Netflix commercial',
    category: 'Educational',
	media: {
      type: 'video',
      src: 'assets/Videos/mock-netflix-commercial-1080-ytshorts.savetube.me.mp4',
      poster: 'assets/images/project-educational.svg'
    },
    image: 'assets/images/project-educational.svg',
    description:
      'This was one of my earliest class assignments in a video production course. We were tasked with creating a 30-second commercial for a real company, and our team chose Netflix because their ad format in 2016 was simple and easy to model for a school project. It was a fun production experience and a strong early exercise in short-form storytelling and editing. This piece was created strictly for educational purposes and has no association with Netflix.',
    roles: 'Writing, Producer, Editor',
    link: ''
  },
  {
    title: 'Memento Mori',
    category: 'Narrative',
	media: {
      type: 'video',
      src: 'assets/Videos/memento-mori-season-6-promo-1080-ytshorts.savetube.me.mp4',
      poster: 'assets/images/project-educational.svg'
    },
    image: 'assets/images/project-corporate.svg',
    description: 'Momentum Mori is a commissioned machinima project and the first video I produced for an external client within a gaming community. What began as a promotional piece for an upcoming seasonal patch quickly evolved into a narrative-driven work, laying the foundation for an ongoing story arc and brand identity. The project ultimately expanded beyond a single video, seeding the development of a mini-series centered around the featured female character. This piece highlights how narrative filmmaking can exist beyond traditional production environments. Created entirely within a game engine, the project relied on in-game tools, player coordination, and creative staging rather than physical cameras or sets. I directed the production, coordinated participants as actors, and handled capture and post-production, shaping performances and scenes within the limitations of the medium. Momentum Mori demonstrates that strong storytelling, cinematography, and pacing are not dependent on traditional equipment, but on an understanding of visual language and collaboration. By leveraging a game as the production environment, this project explores how alternative media spaces can be used to create compelling, narrative-driven work.',
    roles: 'Writer, Producer, Dicector, Editor',
    link: 'https://www.youtube.com/watch?v=yppRCxGFOGE&t'
  },
  {
    title: 'Old Man Farlen',
    category: 'Narrative',
    media: {
      type: 'video',
      src: 'assets/videos/Old Man Farlen - Phillip Schoen (1080p, h264, youtube).mp4',
      poster: 'assets/images/project-tech.svg'
    },
    image: 'assets/images/project-tech.svg',
    description: 'Preview content demonstrating an experimental virtual-production workflow for previsualization.',
    roles: 'Writer, Producer, Director',
    link: 'https://www.youtube.com/watch?v=4nZUNvA2Z9o'
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
