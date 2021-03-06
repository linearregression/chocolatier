var PIXI = function(){};

PIXI.Graphics = function(){};
PIXI.Graphics.addChild = function(item){};
PIXI.Graphics.removeChild = function(item){};

PIXI.Container = function(){};
PIXI.Container.addChild = function(item){};
PIXI.Container.removeChild = function(item){};
PIXI.Container.generateTexture = function(arg){};

PIXI.autoDetectRenderer = function(width, height, arg1, arg2){};
PIXI.CanvasRenderer = function(width, height, arg1, arg2){};
PIXI.CanvasRenderer.render = function(){};
PIXI.WebGLRenderer = function(width, height, arg1, arg2){};
PIXI.WebGLRenderer.render = function(){};

PIXI.loaders;
PIXI.loaders.AssetLoader = function(locations){};
PIXI.loader = function(){};
PIXI.loader.once = function(state, callback){};
PIXI.loader.add = function(name, location){};
PIXI.loader.load = function(){};
PIXI.loader.resources = function(){};

PIXI.Texture;
PIXI.Texture.baseTexture = function (){};
PIXI.Texture.fromImage = function (imageLocation){};

PIXI.Sprite = function(texture){};
PIXI.Sprite.texture;
PIXI.Sprite.texture.frame;

PIXI.Rectangle = function(x, y, w, h){};

PIXI.ParticleContainer = function(){};

PIXI.extras;
PIXI.extras.TilingSprite = function(texture, width, height){};
PIXI.extras.TilingSprite.tilePosition = function(texture, width, height){};

PIXI.RenderTexture = function(w, h){};

PIXI.Text = function(text){};
