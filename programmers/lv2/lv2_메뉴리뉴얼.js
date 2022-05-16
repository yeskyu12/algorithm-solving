// lv2 메뉴 리뉴얼
// https://programmers.co.kr/learn/courses/30/lessons/72411
function solution(orders, course) {
  var answer = [];
  
  let menus = new Set();
  orders.forEach((order) => {
      order.split("").forEach((o) => menus.add(o))
  })
  
  menus = [...menus].sort();
  
  const getCourseMenuList = (countLimit, count, index, menu, courseMenuList) => {
      if (count === countLimit) {
          courseMenuList.push(menu);
          return;
      }
      
      for (let i = index; i < menus.length; i++) {
          getCourseMenuList(countLimit, count + 1, i + 1, menu + menus[i], courseMenuList);
      }
  }
  
  const includesMenu = (order, courseMenu) => {
      let has = true;
      courseMenu.split("").forEach((menu) => {
          if (!order.includes(menu)) has = false;
      })
      return has;
  }
  
  course.forEach((c) => {
      const courseMenuList = [];
      getCourseMenuList(c, 0, 0, '', courseMenuList);
      
      let maxOrderedCount = 0;
      let pickedCourseMenuList = [];
      
      courseMenuList.forEach((courseMenu) => {
          let orderedCount = 0;
          
          orders.forEach((order) => {
              if (includesMenu(order, courseMenu)) orderedCount++;
          })
          
          if (orderedCount > 1) {
              if (orderedCount === maxOrderedCount) {
                  pickedCourseMenuList.push(courseMenu);
              }
              if (orderedCount > maxOrderedCount) {
                  pickedCourseMenuList = [courseMenu];
                  maxOrderedCount = orderedCount;
              }
          }
      })
      answer = [...answer, ...pickedCourseMenuList];
  })
  
  return answer.sort();
}