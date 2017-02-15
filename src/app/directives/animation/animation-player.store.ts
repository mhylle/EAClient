export const animations = {
  fadeIn :{
    startingStyles : {
      styles : [{}]
    },
    keyframes : [
      {
        offset: 0,
        styles: {
          styles: [{
            opacity : 0
          }]
        }
      },
      {
        offset: 1,
        styles: {
          styles: [{
            opacity : 1
          }]
        }
      }
    ]
  },
  fadeOut :{
    startingStyles : {
      styles : [{}]
    },
    keyframes : [
      {
        offset: 0,
        styles: {
          styles: [{
            opacity : 1
          }]
        }
      },
      {
        offset: 1,
        styles: {
          styles: [{
            opacity : 0
          }]
        }
      }
    ]
  },
};
