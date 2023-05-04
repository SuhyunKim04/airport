document.addEventListener("DOMContentLoaded", (event) => {
  const gnbMenu = () => {
    const header = document.getElementById("header");
    const gnb = header.querySelector(".gnb");
    const menus = gnb.querySelectorAll(".depth1 > li");
    const bg = header.querySelector(".bg");
    const line = gnb.querySelector(".line");

    const showMenu = (menu, idx) => {
      // 선택한 메뉴 li == menu
      menu.classList.add("on");

      // offsetWidth, offsetHeight으로 html element의 크기를 가져올 수 있다.
      let size = menu.offsetWidth;

      // 배경높이를 내가 선택한 메뉴의 서브메뉴 높이를 추출하여 넣어준다.
      bg.style.height = menu.children[1].offsetHeight + "px";

      // 활성화된 메뉴길이에 맞게 메뉴를 표시하는 선을 업데이트 한다. 내가 선택한 메뉴의 index번호와 width값을 넘긴다.
      lineUpdate(idx, size);
    };

    const lineUpdate = (idx, size) => {
      let x = 0;

      // 숨겨야 할때사용하기 위한 if문.
      if (idx === "hide") {
        line.style.display = "none";
        return false;
      } else {
        line.style.display = "block";
      }

      // 각 메뉴마다 width값이 다르므로, 매번 계산해야함. width가 모두 같을경우 인덱스번호만큼 곱하기 하면 됨.
      if (idx === 0) {
        x = 0;
      } else if (idx === 1) {
        x = menus[0].offsetWidth + 20;
      } else {
        x = menus[0].offsetWidth + menus[1].offsetWidth + 40;
      }

      // 실제 Line 위치 및 크기 지정 업데이트 부분
      line.style.left = x + "px";
      line.style.width = size + "px";
    };

    // 메뉴 숨기기
    const hideMenu = (menu) => {
      menus.forEach((menu) => menu.classList.remove("on"));
      bg.style.height = 0;
      lineUpdate("hide");
    };

    // 각 메뉴에 이벤트 주기
    menus.forEach((menu, idx) => {
      // Depth1의 li 메뉴에 마우스를 enter 하면 보이기
      menu.addEventListener("mouseenter", () => {
        hideMenu();
        showMenu(menu, idx);
      });

      // gnb영역 전체에서 마우스가 leave 되면 숨기기
      gnb.addEventListener("mouseleave", () => {
        hideMenu();
      });
    });
  };

  gnbMenu();
});


/*
const showContents = (a,b) => {
  a ~
  b ~
}


 tabs.forEach( (tab, idx) => {
  tab.addEventListener('click', () => {
    showContents(tab, idx+1);
    bgReset();
    activeMenuUpdate();
  })
 })
 */