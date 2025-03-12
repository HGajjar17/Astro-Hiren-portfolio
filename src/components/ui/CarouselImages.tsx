function CarouselImages({ project }: { project: Project }) {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    // If multiple images exist, use them. Otherwise use project.image
    const images = project.details.images && project.details.images.length > 0
      ? project.details.images
      : [project.image];
  
    // Auto-advance the carousel every 3 seconds
    useEffect(() => {
      if (!images.length) return;
  
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, [images]);
  
    return (
      <div className="relative w-full h-[300px] overflow-hidden rounded-lg">
        {/* Current Slide */}
        <img
          src={images[currentSlide]}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700"
        />
  
        {/* Dots Navigation (Optional) */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full bg-white/50 ${
                  currentSlide === index ? 'bg-white' : ''
                }`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
