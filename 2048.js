var game={
	data:null,
	RN:4,CN:4,
	start:function(){
		this.data=[];
		for(var r=0;r<this.RN;r++){
			this.data.push([]);
			for(var c=0;c<this.CN;c++){
				this.data[r][c]=0;
			}
		}
		this.randomNum();this.randomNum();
		this.updateView();
		document.onkeydown=function(e){
			switch(e.keyCode){
				case 37:this.moveLeft();break;
				case 38:this.moveUp();break;
				case 39:this.moveRight();break;
				case 40:this.moveDown();break;
			}
		}.bind(this);
	},
	moveDown:function(){
		var before=String(this.data);
		for(var c=0;c<this.CN;c++)
		  this.moveDownInCol(c);
		var after=String(this.data);
		if(before!==after){
		  this.randomNum();
		  this.updateView();
		}
		gridPanel.className=Math.random()>0.9?"red"
		:Math.random()>0.8?"orange"
		:Math.random()>0.7?"yellow"
		:Math.random()>0.6?"green"
		:Math.random()>0.5?"blue"
		:Math.random()>0.4?"purple"
		:Math.random()>0.3?"pink"
		:Math.random()>0.2?"gray":"#e4393c";
	},
	moveDownInCol:function(c){
		for(r=this.RN-1;r>0;r--){
			var Prevr=this.getPrevrInCol(r,c);
			if(Prevr==-1){break;}
			else{
					if(this.data[r][c]==0){
						this.data[r][c]=this.data[Prevr][c];
						this.data[Prevr][c]=0;
						r++;
					}else if(this.data[r][c]==this.data[Prevr][c]){
							this.data[r][c]*=2;
							this.data[Prevr][c]=0;
					}
				}
		}
	},
	getPrevrInCol:function(r,c){
		r--;
		for(;r>=0;r--){
				if(this.data[r][c]!=0){return r}
			}
			return -1;

	},



	moveUp:function(){
		var before=String(this.data);
			for(var c=0;c<this.CN;c++)
			  this.moveUpInCol(c);
			var after=String(this.data);
			if(before!==after){
			  this.randomNum();
			  this.updateView();
			}
		gridPanel.className=Math.random()>0.9?"red"
			:Math.random()>0.8?"orange"
			:Math.random()>0.7?"yellow"
			:Math.random()>0.6?"green"
			:Math.random()>0.5?"blue"
			:Math.random()>0.4?"purple"
			:Math.random()>0.3?"pink"
			:Math.random()>0.2?"gray":"#e4393c";
	},
	moveUpInCol:function(c){
		for(r=0;r<this.RN-1;r++){
			var nextr=this.getNextrInCol(r,c);
			if(nextr==-1){break;}
			else{
					if(this.data[r][c]==0){
						this.data[r][c]=this.data[nextr][c];
						this.data[nextr][c]=0;
						r--;
					}else if(this.data[r][c]==this.data[nextr][c]){
							this.data[r][c]*=2;
							this.data[nextr][c]=0;
					}
				}
		}
	},
	getNextrInCol:function(r,c){
		r++;
		for(;r<this.CN;r++){
				if(this.data[r][c]!=0){return r}
			}
			return -1;

	},




	moveRight:function(){
		var before=String(this.data);
		for(var r=0;r<this.RN;r++)
		  this.moveRightInRow(r);
		var after=String(this.data);
		if(before!==after){
		  this.randomNum();
		  this.updateView();
		}
		gridPanel.className=Math.random()>0.9?"red"
			:Math.random()>0.8?"orange"
			:Math.random()>0.7?"yellow"
			:Math.random()>0.6?"green"
			:Math.random()>0.5?"blue"
			:Math.random()>0.4?"purple"
			:Math.random()>0.3?"pink"
			:Math.random()>0.2?"gray":"#e4393c";
	},
	moveRightInRow:function(r){
		for(c=this.CN-1;c>0;c--){
			var prevc=this.getPrevcInRow(r,c);
			if(prevc==-1){
				break;
			}else if(this.data[r][c]==0){
				this.data[r][c]=this.data[r][prevc];
				this.data[r][prevc]=0;
				c++;
			}else if(this.data[r][c]==this.data[r][prevc]){
				this.data[r][c]*=2;
				this.data[r][prevc]=0;
			}
		}
	},
	getPrevcInRow:function(r,c){
		c--;
		for(;c>=0;c--){
			if(this.data[r][c]!=0)
				return c;
		}
		return -1;
	},
	moveLeft:function(){
		var before=String(this.data);
		for(var r=0;r<this.RN;r++)
		  this.moveLeftInRow(r);
		var after=String(this.data);
		if(before!==after){
		  this.randomNum();
		  this.updateView();
		}
		gridPanel.className=Math.random()>0.9?"red"
		:Math.random()>0.8?"orange"
		:Math.random()>0.7?"yellow"
		:Math.random()>0.6?"green"
		:Math.random()>0.5?"blue"
		:Math.random()>0.4?"purple"
		:Math.random()>0.3?"pink"
		:Math.random()>0.2?"gray":"#e4393c";
	},
	moveLeftInRow:function(r){
		for(c=0;c<this.CN-1;c++){
			var nextc=this.getNextInRow(r,c);
			if(nextc==-1){break;}
			else{
				if(this.data[r][c]==0){
					this.data[r][c]=this.data[r][nextc];
					this.data[r][nextc]=0;
					c--;
				}else if(this.data[r][c]==this.data[r][nextc]){
						this.data[r][c]*=2;
						this.data[r][nextc]=0;
				}
			}
		}
	},
	getNextInRow:function(r,c){
		c++;
		for(;c<this.CN;c++){
			if(this.data[r][c]!=0){return c}
		}
		return -1;
	},
	randomNum:function(){
		while(true){
			var r=Math.floor(Math.random()*this.RN);
			var c=Math.floor(Math.random()*this.CN);
			if(this.data[r][c]==0){
				this.data[r][c]=Math.random()>0.5?4:2;
				break;
			}
		}
	},
	updateView:function(){
		for(var r=0;r<this.RN;r++){
			for(var c=0;c<this.CN;c++){
				var div=document.getElementById("c"+r+c);
				if(this.data[r][c]!=0){
					div.innerHTML=this.data[r][c];
					div.className="cell n"+this.data[r][c];
				}else{
					div.innerHTML="";
					div.className="cell";
				}
			}
		}
	},
	
}
game.start();
