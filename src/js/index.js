const counters = document.querySelectorAll('.count');
const section = document.querySelector('.introduce');

// 숫자 애니메이션 함수
const countAnimation = (counter) => {
  counter.textContent = '0';

  const targetNum = Number(counter.dataset.target);

  const updateCounter = () => {
    const currentNum = Number(counter.textContent);
    const step = targetNum / 100;
    const integerValue = Math.ceil(currentNum + step);

    if (integerValue > targetNum) {
      counter.textContent = targetNum;
    } else {
      counter.textContent = integerValue;
    }

    if (currentNum < targetNum) {
      counter._rafId = requestAnimationFrame(updateCounter);
    }
  };

  updateCounter();
};

// 숫자 리셋
const resetCount = (counter) => {
  if (counter._rafId) cancelAnimationFrame(counter._rafId);
  counter.textContent = '0';
};

// 스크롤 감지
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counters.forEach(countAnimation); // 올라감
      } else {
        counters.forEach(resetCount); // 리셋
      }
    });
  },
  { threshold: 0.3 }
);

io.observe(section);
