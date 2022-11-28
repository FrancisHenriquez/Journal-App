import { ImageListItem, ImageList } from '@mui/material';


export const ImageGallery = () => {

  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={ 4 } rowHeight={ 200 }>
      { itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://media1.giphy.com/media/3tJFReqsF1rIE3909Y/giphy.gif?cid=ecf05e476zgtqlej0btd9imhyecplkcb49nt1l904p9tg7eu&rid=giphy.gif&ct=g',
    title: 'Kratos',
  },
  {
    img: 'https://media0.giphy.com/media/GK6KacgGJZ4OgsgCAC/giphy.gif?cid=ecf05e47h0gjtq253f8v28wix9kqweu5qujtlox7ehhekv1g&rid=giphy.gif&ct=g',
    title: 'Atreus',
  },
  {
    img: 'https://media2.giphy.com/media/VCGtIXKwdwWSH3IHyE/giphy.gif?cid=ecf05e479ips16s1onhzkpdyqznjtretugepppjgn5muvfus&rid=giphy.gif&ct=g',
    title: 'Brok',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
